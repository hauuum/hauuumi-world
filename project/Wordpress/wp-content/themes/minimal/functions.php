<?php

/* 1. 변수 설정 (워드프레스의 변수 지정 문법) */
define( 'THEMEROOT', get_stylesheet_directory_uri() );
define( 'IMAGES', THEMEROOT . '/images' );
define( 'JS', THEMEROOT . '/js' );
define( 'CSS', THEMEROOT . '/css' );






/* 2. 테마 설정 */




/* ------------------------------------------------ */
/* 메뉴 활성화 & 특성 이미지 적용 */
/* ------------------------------------------------ */
if ( ! function_exists( 'hauuumi_theme_setup' ) ) {
    function hauuumi_theme_setup() {

        /* 썸메일 - 특성 이미지를 사용하도록 설정  */
        add_theme_support( 'post-thumbnails' );

        /* 메뉴기능을 쓸수 있도록 등록 */
        register_nav_menus( array(
            'main-menu' => __( 'Main Menu', 'hauuumi' )
       /* 언더바 2개의 의미는 화면에 출력은 하지 않고 메뉴 이름 변수에 할당,
          번역파일이 있다면 번역된 글씨가 표현됨, Main Menu라는 글씨는 외모-메뉴 하단에 테마 위치에 표시   */
        ) );
    }
    add_action( 'after_setup_theme', 'hauuumi_theme_setup' );
}




/* ------------------------------------------------ */
/* SCRIPT & CSS 등록 */
/* ------------------------------------------------ */
if ( ! function_exists( 'hauuumi_scripts' ) ) {
    function hauuumi_scripts() {

        /* 스크립트 등록하기  */
        wp_register_script( 'modernizr-js', JS . '/modernizr.min.js', false, false, true );        

        /* 스크립트 로드하기  */
        wp_enqueue_script( 'modernizr-js' );

        /* CSS 로드하기  */
        wp_enqueue_style( 'common-css', CSS . '/common.css' );
        wp_enqueue_style( 'bootstrap-grid', CSS . '/bootstrap-grid.min.css' );
        wp_enqueue_style( 'default-css', CSS . '/default.css' );
        wp_enqueue_style( 'responsive-css', CSS . '/responsive.css' );
    }
    add_action( 'wp_enqueue_scripts', 'hauuumi_scripts' );
}




//포트폴리오 포스트 타입 등록 (일반적 single.php가 아닌 다른 형태의 single 페이지를 위한것)
function hauuumi_custom_post_type() {
    register_post_type('portfolio',
        array(
            'labels'      => array(
                'name'          => __('portfolios'),
                'singular_name' => __('Portfolio'),
                'set_featured_image' => __('Featured Image'),
                'featured_image' =>__('Add Featured Image'),

            ),
            'public'      => true,
            'has_archive' => true,
            'supports' => array( 'title', 'editor', 'thumbnail' ),
        )
    );
}
add_action('init', 'hauuumi_custom_post_type');





//포트폴리오 포스트 카테고리 지원하기
function create_my_portfolio_category() {
    register_taxonomy(
        'my category',//텍소노미 이름
        'portfolio',//포스트 타입 이름
        array(
           'label' => __( 'category' ),//출력될 카테고리 이름
            'rewrite' => array( 'slug' => 'Portfolios' ),
            'hierarchical' => true,
        )
    );
 }
 add_action( 'init', 'create_my_portfolio_category' );


