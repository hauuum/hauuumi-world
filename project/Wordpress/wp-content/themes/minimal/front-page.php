
<?php get_header(); ?>

<div class="container latest_portfolio">
    <div class="row intro">
        <div class="col-md-4">
            <div class="contents shadow">
                <h2 class="heading2">I’m Adi</h2>
            </div>
        </div>
        <div class="col-md-4">
            <div class="contents shadow">
                <h2 class="heading2">I create super awesome stuff</h2>
            </div>
        </div>
        <div class="col-md-4">
            <div class="contents shadow">
                <h2 class="heading2">I’m available for freelance projects</h2>
            </div>
        </div>
    </div>
    <?php query_posts( array ( 'post-type' => 'portfolio', 'posts_per_page' => 6 ) ); ?> <!-- 포스트 게시판 접속 -->
        <div class="row list">
            <?php while ( have_posts() ) : the_post(); ?> <!-- 반복문 -->
                <div class="col-md-4">
                    <div class="contents shadow">
                        <?php the_post_thumbnail( 'full' ); ?>
                        <div class="hover_contents">
                            <div class="list_info">
                                <h3>
                                    <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
                                    <img src="<?php bloginfo('template_url'); ?>/images/portfolio_list_arrow.png" alt="list arrow">
                                </h3>
                                <p><a href="<?php the_permalink() ?>">Click to See Project</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?> <!-- 반복문 종료 -->
        </div><!--  //list item -->
    <?php wp_reset_query(); ?> <!-- 포스트 게시판 접속종료 -->

    
    <p class="portfolio_readmore">
        <a href="#" class="primary-btn">See my full portfolio</a>
    </p>
</div>

 
<?php get_footer(); ?>