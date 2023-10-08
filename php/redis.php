<?php
// Start a PHP session
session_start();

// Redis server configuration
$redis_host = 'localhost';
$redis_port = 6379;
$redis_password = null; // If your Redis server has a password, set it here

try {
    // Create a new Redis connection
    $redis = new Redis();
    
    // Connect to the Redis server
    if ($redis->connect($redis_host, $redis_port) === false) {
        throw new Exception('Failed to connect to Redis server');
    }
    
    // Authenticate if a password is set
    if ($redis_password !== null && $redis->auth($redis_password) === false) {
        throw new Exception('Failed to authenticate with Redis server');
    }
    
    // Set the Redis session handler
    session_set_save_handler(
        array($redis, 'open'),
        array($redis, 'close'),
        array($redis, 'read'),
        array($redis, 'write'),
        array($redis, 'destroy'),
        array($redis, 'gc')
    );
    
    // Register the session handler
    session_start();
} catch (Exception $e) {
    die('Redis error: ' . $e->getMessage());
}
?>
