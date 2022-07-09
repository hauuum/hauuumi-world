
<?php get_header(); ?>


<h2>Single Post</h2>



<!-- 등록된 글이 있으면 출력하기 -->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php the_content(); ?> <!-- 본문글 뿌려주기 -->

<?php endwhile; else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

 

 
<?php get_footer(); ?>