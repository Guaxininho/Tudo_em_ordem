# Base image
FROM php:8.1-apache

# Enable Apache modules
RUN a2enmod rewrite

# Update package lists
RUN apt-get update

# Install required extensions
RUN apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install \
    pdo_mysql \
    zip

# Set working directory
WORKDIR /var/www/html

# Copy composer files
COPY ./composer.json ./composer.lock ./

# Install composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-scripts --no-autoloader

# Copy application files
COPY . ./

# Generate optimized autoloader
RUN composer dump-autoload --optimize

# Set permissions
RUN chown -R www-data:www-data \
    /var/www/html/storage \
    /var/www/html/bootstrap/cache

# Expose port
EXPOSE 8000

# Command to run the app
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
