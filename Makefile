cd ...PHONY: dev dev-no-reload

default: dev

dev:
	@echo "=> Starting dev environment"
	docker-compose up --build salieri component

dev-no-reload:
	@echo "=> Starting dev environment for webpack-dev-server incompatible browsers"
	docker-compose up --build salieri component-no-reload

dashboard:
	@echo "=> Starting Webpack-dev-server dashboard"
	./node_modules/.bin/webpack-dashboard -c red -- ./node_modules/.bin/webpack-dev-server