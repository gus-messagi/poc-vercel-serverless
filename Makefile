db-up:
	cd infra/docker && \
	docker-compose up -d

db-down:
	cd infra/docker && \
	docker-compose down -v --remove-orphans