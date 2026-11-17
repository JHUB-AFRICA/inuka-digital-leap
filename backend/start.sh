#!/bin/bash
set -e

cd /app

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Running migrations..."
python manage.py migrate --noinput

echo "Ensuring superuser exists..."
python manage.py createsuperuser --noinput || true

echo "Loading initial programme content when the database is empty..."
python manage.py shell -c "from django.core.management import call_command; from cohorts.models import Cohort; call_command('loaddata', 'seed_data.json') if not Cohort.objects.exists() else None"

echo "Starting Gunicorn..."
exec gunicorn config.wsgi:application --bind 0.0.0.0:${PORT:-8000} --workers 2 --threads 4 --timeout 30 --access-logfile - --error-logfile -
