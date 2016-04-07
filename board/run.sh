set -e

sleep 10000
echo 'run'
cd /app
PORT=80 /usr/local/bin/meteor
