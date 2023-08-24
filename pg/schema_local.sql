-- Create a database for everything silo-related.
CREATE DATABASE silo;
USE silo;


--- Make Silo aware of the cluster regions and set a primary region.
ALTER DATABASE silo SET PRIMARY REGION "us-east1";
ALTER DATABASE silo ADD REGION "us-west1";
ALTER DATABASE silo ADD REGION "europe-west1";


-- Enable Super Regions and group the regions into them.
SET enable_super_regions = 'on';

ALTER DATABASE silo ADD SUPER REGION us
VALUES "us-east1", "us-west1";

ALTER DATABASE silo ADD SUPER REGION eu
VALUES "europe-west1";


-- Create the art_local table, which will store all location-senstive data.
CREATE TABLE art_local (
  user_id STRING NOT NULL,
  username STRING NOT NULL,
  region crdb_internal_region NOT VISIBLE NOT NULL,
  last_updated TIMESTAMPTZ NOT NULL DEFAULT now():::TIMESTAMPTZ,
  "values" JSONB NOT NULL,
  super_region STRING NULL AS (regexp_extract(region::STRING, e'\\w+-(\\w+)-':::STRING)) STORED,
  CONSTRAINT art_local_pkey PRIMARY KEY (region ASC, user_id ASC),
  INDEX art_local_user_id_idx (user_id ASC)
) LOCALITY REGIONAL BY ROW AS region;


-- Create the art_global table, which will store cross-region data.
CREATE TABLE art_global (
  user_id STRING NOT NULL,
  username STRING NOT NULL,
  last_updated TIMESTAMPTZ NOT NULL DEFAULT now():::TIMESTAMPTZ,
  "values" JSONB NOT NULL,
  CONSTRAINT art_global_pkey PRIMARY KEY (user_id ASC)
) LOCALITY GLOBAL;
