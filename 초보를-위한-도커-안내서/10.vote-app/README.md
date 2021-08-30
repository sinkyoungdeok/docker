```
# $ cd vote
# $ docker build -t voting-vote .
# $ cd worker
# $ docker build -t voting-worker .
# $ cd result
# $ docker build -t voting-result .

-------- docer-compose.yml -------
version: '3'

services:
  vote:
    image: voting-vote
    ports:
      - "60001:80"
  redis:
    image: redis:alpine
  worker:
    image: voting-worker
  db:
    image: postgres:9.4
    environment:
      POSTGRES_HOST_AUTH_METHOD: trust
  result:
    image: voting-result
    ports:
      - "60002:80"
```