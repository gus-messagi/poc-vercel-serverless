db-up:
	cd infra && \
	docker-compose up -d

db-down:
	cd infra && \
	docker-compose down -v --remove-orphans