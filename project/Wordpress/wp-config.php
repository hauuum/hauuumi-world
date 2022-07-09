<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hauuumi' );

/** MySQL database username */
define( 'DB_USER', 'hauuumi' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Ehfkdl334^^' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mgl?{YD(ut5l;_78GZcyR.b:J2@6/T}=|1EZ80{T-o0OaIP$pr?wnx]CU8@.in2m' );
define( 'SECURE_AUTH_KEY',  'vDElGDEmIMg?,X=+k(KnAR5v]B3bKBwQ&<OV,}`>8y`OWDQ&JW>Ftx.]y,jt@ihj' );
define( 'LOGGED_IN_KEY',    '/FD:]!pwy,M},@;OglgjIi_bXOq6;z{*h$sar1NVv:hKE1_EwhM$!X0!|k$O-+hA' );
define( 'NONCE_KEY',        '-KNF24=d.7ey%yJ`]~R5K*o]Pe>@ jO=VJa&M;?HdRc^xENIUR} XCyrV1eF3()m' );
define( 'AUTH_SALT',        'Sh$P|/UtgSo 2-[xt.y!N1Yks~`j<2Z4zxqbunzh`vwuOl-Se+m$ruV9N|]HaG^a' );
define( 'SECURE_AUTH_SALT', ':f.sXL++b=*s=c]vtoV;Y/7vd]yU]T]H=E,<[*qf&5MNW%v6dcIzHSEVk)M#LA+j' );
define( 'LOGGED_IN_SALT',   '[c??]LDqAxA@&H kFh!jo{PuVMp8_/s=3O{Xi6 @1b&usu6d!4f t .[#d8_#4%P' );
define( 'NONCE_SALT',       ']tEM>lJ_kUM#j!i*56W0u-5P~7IXz,je92Rg/ 5-p.(SHR!}Y?_<80Q#O3uuvC*;' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
