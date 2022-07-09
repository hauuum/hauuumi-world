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
    <header>
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
    </header>
    <hr>
    <!-- HEADER -->

    <main class="content">