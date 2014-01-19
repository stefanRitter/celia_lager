<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'organiccelia');

/** MySQL database username */
define('DB_USER', 'organiccelia');

/** MySQL database password */
define('DB_PASSWORD', 'Celia0rgan#c');

/** MySQL hostname */
define('DB_HOST', 'organiccelia.db.9778470.hostedresource.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^![>vy@5PtM4cW-yx>1!ZW|;c4s|N1(N]z`Y0:|S.La8LsbcR`tBd_tY:~A0C2mV');
define('SECURE_AUTH_KEY',  'x8^vg9g5S89wG!tsM8WRW$R/j?G*rnIJU0A_sI =5?s*FoA7x!xOJf{46|X4-q{h');
define('LOGGED_IN_KEY',    '4zZvUGSdc[2(1cMpMxf4;w<o!FGK-;n8ZpZYZ@A8!2fG+{Zre/+*GpS_KyD00&lt');
define('NONCE_KEY',        '_GvWp<]qZO_RGH2_H6XB~lt+bv)=#^gT:FLEf1?+S3I{KzR7<9VGQhQCnf=5Jh(-');
define('AUTH_SALT',        '|.H{:7h97`van.>D=wKF_zo^Eg%*dY(k_~yWZI+6w^oj)W6w|9,gH4WKA|W,#tft');
define('SECURE_AUTH_SALT', '#|+3_5%bIFVsfewk+& ,*N2 s-2pCx)aF6Jx`q`V-+)r+1hCB|gJBY>ghMZ+ILdJ');
define('LOGGED_IN_SALT',   'i|HNn*c7p&h&6DHaX&hpuMW&kw^)#z}FonOsl*nl)SgL:#|<97|)Hs)b;+p4N}uW');
define('NONCE_SALT',       't|I/rzekgbE}lH^O)Gaw]{G}dt$hYTCTah!du5/L6}xi&EV!y;@4;fsSg,d-r0j6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
