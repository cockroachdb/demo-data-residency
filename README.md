<p align="center">
  <a href="https://www.cockroachlabs.com/demos/demo-data-residency">
    <img alt="A demo of multi-region capabilities in CockroachDB" src="https://www.cockroachlabs.com/demos/demo-data-residency/data-residency-open-graph-image.jpg" />
  </a>
</p>

<br />

# The Art Of Data Residency And Application Architecture.

A demo of multi-region capabilities in CockroachDB.

- 🚀 Live Preview:
  [https://www.cockroachlabs.com/demos/demo-data-residency](https://www.cockroachlabs.com/demos/demo-data-residency)
- ✏️ Blog:
  [https://www.cockroachlabs.com/blog/multi-region-serverless-data-residency/](https://www.cockroachlabs.com/blog/multi-region-serverless-data-residency/)

### Running locally

- Install package dependencies

```sh
yarn
```

- Spin up CockroachDB

```sh
cockroach demo --nodes 9 --insecure --no-example-database
```

- Run the app

```sh
DATABASE_URL="postgres://root@localhost:26257?silo?sslmode=disable" yarn dev
```
