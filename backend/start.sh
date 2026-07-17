#!/bin/bash
set -e

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Running migrations..."
python manage.py migrate --noinput

echo "Loading seed data..."
python manage.py loaddata seed_data.json || true

echo "Ensuring superuser exists..."
python manage.py createsuperuser --noinput || true

echo "Starting Gunicorn on port ${PORT:-8000}..."
exec gunicorn config.wsgi --bind 0.0.0.0:${PORT:-8000}
