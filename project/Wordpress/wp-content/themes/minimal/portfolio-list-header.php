<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title( '|', true, 'right' ); ?><?php bloginfo('name'); ?></title>

    <?php wp_head(); ?> <!-- 다양한 플러그인 들어올 자리 -->
</head>
<body <?php body_class(); ?>> <!-- 플러그인에서 사용하는 클라스명이 들어올 자리-->
    <header class="portfolio">
        <h1 class="logo"><a href="#">Minimal portfolio Theme</a></h1>
        <nav>
            <!-- <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="portfolio.html">portfolio</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul> -->
            <?php
                wp_nav_menu( array(
                    'theme_location' => 'main-menu',
                    'container' => false
                    ));
                ?>
        </nav>
        <hr>
        <ul class="portfolio_links">
            <li><a href="#" class="secondary-btn active">All</a></li>
            <?php
               $categories = get_categories( array(
                   'hide_empty' => true,
                   'orderby' => 'name',
                   'order'   => 'ASC',
                   'taxonomy' => 'my category',
                   'exclude' => '14'//배제하고 싶은 카테고리의 id     
               ) );

               foreach( $categories as $category ) {
                   ?>
                   <li><a href="<?php echo get_category_link( $category->term_id ) ?>" class="secondary-btn"><?php echo $category->name; ?></a></li>
            <?php  } ?>


            <!-- <li><a href="#" class="secondary-btn">print</a></li>
            <li><a href="#" class="secondary-btn">Web</a></li>
            <li><a href="#" class="secondary-btn">Mobile</a></li> -->
        </ul>  
    </header>
    
    
    <main class="content">