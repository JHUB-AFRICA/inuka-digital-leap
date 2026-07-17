FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project
COPY . .

# Collect static files at build time (safe no-op if STATIC_ROOT unused locally)
RUN python manage.py collectstatic --noinput || true

EXPOSE 8000

# Production default: Gunicorn (Railway uses this)
# Local dev overrides this via docker-compose.yml's `command:` directive
CMD ["gunicorn", "config.wsgi", "--bind", "0.0.0.0:8000"]
