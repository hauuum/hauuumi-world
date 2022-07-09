
<?php include_once('portfolio-list-header.php') ?>



<h2>포트폴리오 리스트</h2> 
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php the_content(); ?> <!-- 본문글 뿌려주기 -->

<?php endwhile; else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

 
<?php get_footer(); ?> 