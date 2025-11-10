# backend

## Requirements
- Java 17+
- Gradle (or use the Gradle wrapper if you add it)
- MySQL running with a database named `shopdb`

## Setup
1. Create database:
   ```sql
   CREATE DATABASE shopdb;
   ```
2. Edit `src/main/resources/application.yml` and set your MySQL credentials and Google OAuth client id/secret.
3. Run the application:
   ```bash
   ./gradlew bootRun
   # or
   gradle bootRun
   ```

API endpoints:
- GET /api/items
- GET /api/items/{id}
- POST /api/cart/add/{id}
- GET /api/cart/view
- POST /api/cart/buy