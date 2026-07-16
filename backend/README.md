# Inuka Digital Leap — Backend

Django + DRF + PostgreSQL + Cloudinary + Docker

> Building Kenya's Digital Infrastructure Talent Pipeline — Backend API Service

---

## Overview

The Inuka Digital Leap Backend is a robust RESTful API service built with Django and Django REST Framework. It powers the institutional digital platform by managing trainee data, program information, media assets, user authentication, and application workflows.

The backend is designed to be:
- **Scalable**: Production-ready architecture supporting growth
- **Secure**: JWT authentication and permission-based access control
- **Reliable**: Comprehensive error handling and logging
- **Cloud-ready**: Cloudinary integration for media management
- **Containerized**: Docker/Docker Compose for consistent deployments

---

## Stack

| Technology | Purpose |
|-----------|---------|
| **Django 4.x** | Web framework |
| **Django REST Framework** | RESTful API development |
| **PostgreSQL** | Primary database |
| **Cloudinary** | Media storage & CDN |
| **Docker** | Containerization |
| **docker-compose** | Multi-service orchestration |
| **JWT (simplejwt)** | Token-based authentication |
| **Gunicorn** | Production WSGI server |
| **Celery** | Asynchronous task queue |
| **Redis** | Caching & message broker |

---

## Core Features

### Authentication & Authorization
- JWT token-based authentication
- Role-based access control (RBAC)
- User registration and profile management
- Secure password hashing and validation

### Trainee Management
- Trainee profile administration
- Technical specialization tracking
- Progress and achievement logging
- Success story documentation

### Program Management
- Program pathway and stage information
- Cohort management
- Activity and event scheduling
- Timeline and milestone tracking

### Content Management
- Blog and news article management
- Success stories and testimonials
- Impact metrics and dashboards
- Media asset management via Cloudinary

### Application Processing
- Program application submission
- Application status tracking
- Inquiry form handling
- Contact and partnership requests

### Media Management
- Cloudinary image upload and optimization
- CDN-based media delivery
- Responsive image variants
- Secure asset access

---

## Technology Architecture

### API Architecture
- **Serializers**: DRF serializers for data validation and transformation
- **ViewSets**: Class-based views with standard CRUD operations
- **Routers**: Automatic URL routing
- **Permissions**: Fine-grained permission classes
- **Filters**: Advanced filtering, search, and ordering

### Database
- **PostgreSQL**: Relational data with ACID compliance
- **Migrations**: Version-controlled schema management
- **ORM**: Django ORM for database abstraction
- **Connection Pooling**: Optimized database performance

### Media Handling
- **Cloudinary Storage**: Custom Django storage backend
- **Image Optimization**: Automatic resizing and compression
- **CDN Delivery**: Global content delivery
- **Secure URLs**: Time-limited and signed asset URLs

### Authentication
- **simplejwt**: JWT token generation and validation
- **Refresh Tokens**: Long-lived token rotation
- **Token Expiration**: Configurable token lifetimes
- **Secure Cookies**: HTTPS-only token storage

---

## Project Structure

```
backend/
│
├── manage.py                          # Django management script
├── requirements.txt                   # Python dependencies
│
├── config/                            # Django configuration
│   ├── settings.py                    # Settings (database, apps, middleware)
│   ├── settings/
│   │   ├── base.py                    # Base settings
│   │   ├── development.py             # Development-specific settings
│   │   └── production.py              # Production-specific settings
│   ├── urls.py                        # Root URL routing
│   ├── wsgi.py                        # WSGI application
│   ├── asgi.py                        # ASGI application (async)
│   └── celery.py                      # Celery configuration
│
├── apps/                              # Django applications (features)
│   │
│   ├── accounts/                      # User management
│   │   ├── migrations/
│   │   ├── models.py                  # User and authentication models
│   │   ├── serializers.py             # User serializers
│   │   ├── views.py                   # User viewsets
│   │   ├── urls.py                    # User routes
│   │   ├── admin.py                   # Django admin configuration
│   │   ├── permissions.py             # Custom permissions
│   │   └── tests.py                   # Unit tests
│   │
│   ├── trainees/                      # Trainee management
│   │   ├── migrations/
│   │   ├── models.py                  # Trainee and profile models
│   │   ├── serializers.py             # Trainee serializers
│   │   ├── views.py                   # Trainee viewsets
│   │   ├── urls.py                    # Trainee routes
│   │   ├── admin.py
│   │   ├── filters.py                 # Custom filters for trainees
│   │   └── tests.py
│   │
│   ├── programs/                      # Program management
│   │   ├── migrations/
│   │   ├── models.py                  # Program, pathway, cohort models
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── tests.py
│   │
│   ├── content/                       # Content management
│   │   ├── migrations/
│   │   ├── models.py                  # Blog, stories, articles models
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── tests.py
│   │
│   ├── applications/                  # Application processing
│   │   ├── migrations/
│   │   ├── models.py                  # Application and inquiry models
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   ├── tasks.py                   # Celery async tasks
│   │   └── tests.py
│   │
│   ├── media/                         # Media management
│   │   ├── migrations/
│   │   ├── models.py                  # Media asset model
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── storage.py                 # Cloudinary storage backend
│   │   ├── admin.py
│   │   └── tests.py
│   │
│   └── common/                        # Shared utilities
│       ├── models.py                  # Base model classes
│       ├── serializers.py             # Base serializers
│       ├── exceptions.py              # Custom exceptions
│       ├── pagination.py              # Pagination classes
│       ├── utils.py                   # Utility functions
│       ├── middleware.py              # Custom middleware
│       └── validators.py              # Custom validators
│
├── logs/                              # Application logs
│   └── django.log
│
├── docker-compose.yml                 # Multi-service composition
├── Dockerfile                         # Docker image definition
├── nginx.conf                         # Nginx configuration
├── .dockerignore
├── .env.example                       # Environment template
├── .gitignore
│
└── README.md                          # This file
```

---

## Environment Setup

### Prerequisites

- **Python 3.9+**: https://www.python.org/downloads/
- **PostgreSQL 12+**: https://www.postgresql.org/download/
- **Redis**: https://redis.io/download
- **Docker & Docker Compose**: https://www.docker.com/products/docker-desktop/
- **Git**: https://git-scm.com/

### Environment Variables

Create a `.env` file in the backend directory:

```bash
# Django Configuration
DEBUG=False
SECRET_KEY=your-super-secret-key-change-this-in-production
ALLOWED_HOSTS=localhost,127.0.0.1,yourdomain.com

# Database
DB_ENGINE=django.db.backends.postgresql
DB_NAME=inuka_db
DB_USER=inuka_user
DB_PASSWORD=secure-password-here
DB_HOST=postgres
DB_PORT=5432

# Redis
REDIS_URL=redis://redis:6379/0

# JWT Configuration
JWT_ALGORITHM=HS256
JWT_ACCESS_TOKEN_LIFETIME=3600  # 1 hour (seconds)
JWT_REFRESH_TOKEN_LIFETIME=604800  # 7 days (seconds)

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:4200,https://yourdomain.com

# Email Configuration
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# Celery Configuration
CELERY_BROKER_URL=redis://redis:6379/0
CELERY_RESULT_BACKEND=redis://redis:6379/0

# Application Settings
APP_ENVIRONMENT=production
LOG_LEVEL=INFO
```

See `.env.example` for all available configuration options.

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JHUB-AFRICA/inuka-digital-leap.git
cd inuka-digital-leap/backend
```

### 2. Create Virtual Environment

```bash
python -m venv venv

# Activate on macOS/Linux
source venv/bin/activate

# Activate on Windows
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
nano .env
```

### 5. Database Setup

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

### 6. Load Initial Data (Optional)

```bash
python manage.py loaddata fixtures/initial_data.json
```

### 7. Collect Static Files

```bash
python manage.py collectstatic --noinput
```

---

## Running the Application

### Local Development

```bash
# Start development server
python manage.py runserver

# Server runs at http://localhost:8000
# API available at http://localhost:8000/api/
# Admin interface at http://localhost:8000/admin/
```

### With Docker Compose

```bash
# Build containers
docker compose build

# Start all services
docker compose up

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

### Production with Gunicorn

```bash
gunicorn config.wsgi --bind 0.0.0.0:8000 --workers 4 --worker-class sync
```

---

## API Documentation

### Base URL

```
http://localhost:8000/api/
```

### Authentication

All protected endpoints require JWT token in the Authorization header:

```
Authorization: Bearer <your-access-token>
```

### Core Endpoints

#### Authentication
- `POST /api/auth/token/` — Obtain JWT token
- `POST /api/auth/token/refresh/` — Refresh access token
- `POST /api/auth/logout/` — Revoke token

#### Users
- `GET /api/users/` — List users (admin only)
- `POST /api/users/` — Create user
- `GET /api/users/{id}/` — User detail
- `PUT /api/users/{id}/` — Update user
- `DELETE /api/users/{id}/` — Delete user

#### Trainees
- `GET /api/trainees/` — List all trainees
- `POST /api/trainees/` — Create trainee
- `GET /api/trainees/{id}/` — Trainee detail
- `PUT /api/trainees/{id}/` — Update trainee
- `DELETE /api/trainees/{id}/` — Delete trainee

#### Programs
- `GET /api/programs/` — List programs
- `GET /api/programs/{id}/` — Program detail
- `GET /api/cohorts/` — List cohorts
- `GET /api/pathways/` — List program pathways

#### Content
- `GET /api/articles/` — List blog articles
- `GET /api/articles/{id}/` — Article detail
- `GET /api/stories/` — List success stories
- `GET /api/stories/{id}/` — Story detail

#### Applications
- `POST /api/applications/` — Submit application
- `GET /api/applications/{id}/` — Application status
- `POST /api/inquiries/` — Submit inquiry
- `POST /api/contact/` — Contact form submission

#### Media
- `POST /api/media/upload/` — Upload media asset
- `GET /api/media/{id}/` — Media detail
- `DELETE /api/media/{id}/` — Delete media

---

## Database Models

### Key Models

#### User
- User authentication and profile
- Role-based access control
- Email verification

#### Trainee
- Trainee profile information
- Technical specialization
- Progress tracking
- Achievements and certifications

#### Program
- Program information and metadata
- Program pathway stages
- Cohorts and batches
- Timeline and milestones

#### Article/Story
- Blog articles and news
- Success stories
- Author and publication metadata
- Featured content flags

#### Application
- Program applications
- Application status tracking
- Submission metadata

#### MediaAsset
- Media file references
- Cloudinary integration
- Access control and variants

---

## Testing

### Run All Tests

```bash
python manage.py test
```

### Run Specific App Tests

```bash
python manage.py test apps.trainees
```

### Run with Coverage

```bash
coverage run --source='.' manage.py test
coverage report
coverage html  # Generate HTML report
```

### Test Database

Tests use a separate test database (automatically created and destroyed).

---

## Celery & Async Tasks

### Start Celery Worker

```bash
celery -A config worker -l info
```

### Start Celery Beat (Scheduler)

```bash
celery -A config beat -l info
```

### Available Tasks

- `send_application_confirmation` — Send application confirmation emails
- `generate_daily_reports` — Generate system reports
- `process_media_variants` — Create responsive image variants
- `cleanup_expired_tokens` — Remove expired refresh tokens

---

## Admin Interface

Access Django admin at: **http://localhost:8000/admin/**

Login with superuser credentials created during setup.

### Admin Features

- User management
- Trainee administration
- Program configuration
- Content management
- Application review
- System monitoring

---

## Security Best Practices

### Implemented Security Measures

✅ **HTTPS/SSL**: Required in production  
✅ **CSRF Protection**: Django CSRF middleware enabled  
✅ **SQL Injection Prevention**: Django ORM parameterized queries  
✅ **XSS Prevention**: Serializer validation and escaping  
✅ **Authentication**: JWT with secure token storage  
✅ **Authorization**: Permission-based access control  
✅ **Password Security**: PBKDF2 hashing with salt  
✅ **Rate Limiting**: Throttle classes on sensitive endpoints  
✅ **CORS**: Configured for specific origins only  
✅ **Secret Management**: Environment variables, never hardcoded  

### Security Checklist

- [ ] Change `SECRET_KEY` in production
- [ ] Set `DEBUG=False` in production
- [ ] Use HTTPS in production
- [ ] Configure allowed hosts
- [ ] Set secure CORS origins
- [ ] Enable database backups
- [ ] Configure rate limiting
- [ ] Review user permissions
- [ ] Monitor error logs
- [ ] Regular security updates

---

## Performance Optimization

### Database Optimization
- Index frequently queried fields
- Use `select_related()` and `prefetch_related()`
- Implement pagination for large datasets
- Use database connection pooling

### Caching Strategy
- Redis caching for frequently accessed data
- Cache HTTP responses on GET endpoints
- Cache template fragments
- API response caching with ETags

### API Performance
- Request/response compression
- Pagination with configurable limits
- Filtering and search optimization
- Async task processing with Celery

---

## Deployment

### Docker Deployment

```bash
# Build production image
docker build -t inuka-backend:latest .

# Run with environment file
docker run --env-file .env -p 8000:8000 inuka-backend:latest
```

### Docker Compose Deployment

```bash
docker compose -f docker-compose.yml up -d
```

### Environment-Specific Settings

```python
# settings/production.py
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
DEBUG = False
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

### Nginx Configuration

```nginx
upstream django_app {
    server backend:8000;
}

server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://django_app;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Troubleshooting

### Common Issues

#### 1. Database Connection Error
```
Error: could not translate host name "postgres" to address
```
**Solution**: Ensure PostgreSQL is running and `DB_HOST` matches service name

#### 2. Static Files Not Loading
```
python manage.py collectstatic --noinput
```

#### 3. Migration Conflicts
```
python manage.py showmigrations
python manage.py migrate --fake-initial
```

#### 4. Celery Tasks Not Running
```
# Check Redis connection
redis-cli ping  # Should return PONG

# Verify Celery worker is running
ps aux | grep celery
```

#### 5. Permission Denied Errors
```bash
chmod +x manage.py
sudo chown -R $USER:$USER .
```

### Debug Mode

Enable detailed logging:

```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': 'logs/debug.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'DEBUG',
        },
    },
}
```

---

## API Client Integration

### Frontend (Angular) Integration

```typescript
// Example: HTTP Client with JWT
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
});

this.http.get('/api/trainees/', { headers })
  .subscribe(data => console.log(data));
```

### SDK/Package

Install backend SDK for frontend:

```bash
npm install @inuka/backend-sdk
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-Q2 | Initial release |
| 1.1.0 | 2024-Q3 | Added Celery async tasks |
| 1.2.0 | 2024-Q4 | Improved API documentation |

---

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** changes: `git commit -am 'Add feature'`
4. **Push** to branch: `git push origin feature/your-feature`
5. **Submit** a pull request

### Code Standards

- Follow PEP 8 style guide
- Write tests for new features
- Update documentation
- Use descriptive commit messages

---

## Support & Contact

For issues, questions, or contributions:

- **Issues**: [GitHub Issues](https://github.com/JHUB-AFRICA/inuka-digital-leap/issues)
- **Email**: support@jhubafrica.com
- **Documentation**: [Project Wiki](https://github.com/JHUB-AFRICA/inuka-digital-leap/wiki)

---

## Maintainers

Developed for **Inuka Digital Leap** — JHUB AFRICA

Supported by:
- KPC Foundation
- JKUAT
- JHUB Africa

---

## License

This project is intended for institutional and educational purposes.

---

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework Guide](https://www.django-rest-framework.org/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [JWT Guide](https://jwt.io/)

---

**Last Updated**: July 2024  
**API Version**: v1.0
