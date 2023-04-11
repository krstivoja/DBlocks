<?php
/**
 * Plugin Name:       DBlocks
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dblocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_dblocks_block_init() {
	// register_block_type( __DIR__ . '/build/template/' );
	// register_block_type( __DIR__ . '/build/static/' );
	// register_block_type( __DIR__ . '/build/wrapper/' );
	register_block_type( __DIR__ . '/build/ultimate-wrapper/' );
	// register_block_type( __DIR__ . '/build/roadmap/' );
	// register_block_type( __DIR__ . '/build/lazy-load/' );
	register_block_type( __DIR__ . '/build/dark-mode/' );
}
add_action( 'init', 'create_block_dblocks_block_init' );


include 'inc/roadmap_ctp.php';

// function my_gutenberg_css() {
//     wp_enqueue_style( 'my-gutenberg-css', plugin_dir_url( __FILE__ ) . 'editor/dark-theme.css', array(), '1.0', 'all' );
// }
// add_action( 'enqueue_block_editor_assets', 'my_gutenberg_css' );



// function custom_editor_icon_script() {
//     wp_enqueue_script( 'custom-editor-icon', plugin_dir_url( __FILE__ ) . 'editor/index.js', array(), '1.0', true );
// }
// add_action( 'enqueue_block_editor_assets', 'custom_editor_icon_script' );
