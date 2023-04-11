<?php

// Register Roadmap Post Type
function register_roadmap_post_type() {
    $labels = array(
        'name' => 'Roadmaps',
        'singular_name' => 'Roadmap',
        'menu_name' => 'Roadmaps',
        'name_admin_bar' => 'Roadmap',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Roadmap',
        'new_item' => 'New Roadmap',
        'edit_item' => 'Edit Roadmap',
        'view_item' => 'View Roadmap',
        'all_items' => 'All Roadmaps',
        'search_items' => 'Search Roadmaps',
        'parent_item_colon' => 'Parent Roadmaps:',
        'not_found' => 'No Roadmaps found.',
        'not_found_in_trash' => 'No Roadmaps found in Trash.',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'roadmap'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 20,
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'revisions'),
        'menu_icon' => 'dashicons-chart-bar',
        'show_in_rest' => true,
    );

    register_post_type('roadmap', $args);
}
add_action('init', 'register_roadmap_post_type');

// Register State Taxonomy
function register_state_taxonomy() {
    $labels = array(
        'name' => 'States',
        'singular_name' => 'State',
        'menu_name' => 'States',
        'all_items' => 'All States',
        'edit_item' => 'Edit State',
        'view_item' => 'View State',
        'update_item' => 'Update State',
        'add_new_item' => 'Add New State',
        'new_item_name' => 'New State Name',
        'parent_item' => 'Parent State',
        'parent_item_colon' => 'Parent State:',
        'search_items' => 'Search States',
        'popular_items' => 'Popular States',
        'separate_items_with_commas' => 'Separate States with commas',
        'add_or_remove_items' => 'Add or remove States',
        'choose_from_most_used' => 'Choose from the most used States',
        'not_found' => 'No States found.',
        'no_terms' => 'No States',
        'items_list_navigation' => 'States list navigation',
        'items_list' => 'States list',
        'back_to_items' => 'Back to States',
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud' => false,
    );

    register_taxonomy('state', array('roadmap'), $args);
}
add_action('init', 'register_state_taxonomy');


?>