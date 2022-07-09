
<?php get_header(); ?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <div class="portfolio_single"><!-- 다른 main과 다르기때문에 div를 생성해서 class명을 지정해줌-->
        <div class="container">
            <div class="row">
                <div class="col-md-8 description">
                    <div class="contents shadow">
                        <img src="<?php the_field('rep_img1'); ?>" alt="<?php the_field('rep_img1_desc'); ?>">
                        <p><?php the_field('rep_img1_desc'); ?></p>
                    </div>
                    <div class="contents shadow">
                        <img src="<?php the_field('rep_img2'); ?>" alt="<?php the_field('rep_img2_desc'); ?>">
                        <p><?php the_field('rep_img2_desc'); ?></p>
                    </div>
                </div>
                <div class="col-md-4 portfolio_info">
                    <div class="contents shadow">
                        <h2><?php the_title(); ?></h2>
                        <p><?php the_content(); ?></p>
                        <p class="link">
                            <a href="<?php the_field('website_url'); ?>">Visit site &rarr;</a>
                        </p>
                        <hr class="double">
                        <blockquote>
                            <p>"<?php the_field('review_content'); ?>"</p>
                            <small>- <?php the_field('review_writer'); ?> -</small>
                        </blockquote>
                        <p class="nav"> 
                            <a href="#" class="secondary-btn">&larr; Previous</a>
                            <a href="#" class="secondary-btn">Next &rarr;</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php endwhile; else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

 
<?php get_footer(); ?>