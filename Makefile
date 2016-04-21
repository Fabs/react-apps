deploy:
    eval "$(docker-machine env docean)"
    docker build -t fabs/react-loja ./board
    docker-compose start

galaxy:
    DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy placar.reativo.com --settings settings.json
