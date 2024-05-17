# Express - MongoDB Container

This repository is for building expressjs backend with mongo.
And Deploy using Docker Compose.

Here is the way to setup Ubuntu.

### Refresh the repository

```bash
sudo apt update
```

### Install Server Dependecies

```bash
sudo apt install apt-transport-https curl gnupg-agent ca-certificates software-properties-common -y
```

Just in case there is cache error.

```bash
sudo killall apt apt-get
```

```bash
sudo rm /var/lib/apt/lists/lock
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock*
```

```bash
sudo dpkg --configure -a
```

```bash
sudo apt update
```

```bash
sudo apt install apt-transport-https curl gnupg-agent ca-certificates software-properties-common -y
```

### Install Docker and Docker compose

```bash
apt install docker.io
```

```bash
apt install docker-compose
```

### Docker Test

```bash
docker version
```
