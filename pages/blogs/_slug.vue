<template>
  <section class="blog-slug">
    <section class="blog-container overflow">
      <header class="background">
        <img
          :src="require(`~/assets/images/${blog.imageName}`)"
          :style="{ objectPosition: blog.backgroundImagePosition }"
        />
      </header>

      <div class="blog">
        <div class="image">
          <ImageMask
            :imageName="blog.imageName"
            :width="blog.width"
            :height="blog.height"
            class="image-mask"
          />
        </div>

        <div class="blog-content overflow">
          <div class="heading-wrapper">
            <h2>{{ blog.title }}</h2>

            <span class="date-wrapper"
              ><p class="date">{{ blog.date }}</p></span
            >
          </div>

          <p class="blog-description">
            <!-- {{ blog.description }} -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            sapiente explicabo ducimus porro velit amet mollitia fugiat illo
            laboriosam, dolorem ipsam, vero odio possimus deserunt delectus!
            Aspernatur sapiente sunt consectetur. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod eligendi provident nisi voluptate
            voluptates laborum voluptas commodi est quos ducimus necessitatibus
            in, facere dolorem, doloremque officiis ipsum consequatur nemo
            saepe? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            ipsa! Omnis, beatae dignissimos excepturi officia facere aliquam
            neque. Ipsa reprehenderit amet, minus quidem ipsam a modi at
            quisquam corrupti obcaecati? sapiente explicabo ducimus porro velit
            amet mollitia fugiat illo laboriosam, dolorem ipsam, vero odio
            possimus deserunt delectus! Aspernatur sapiente sunt consectetur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            eligendi provident nisi voluptate voluptates laborum voluptas
            commodi est quos ducimus necessitatibus in, facere dolorem,
            doloremque officiis ipsum consequatur nemo saepe? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ea, ipsa! Omnis, beatae
            dignissimos excepturi officia facere aliquam neque. Ipsa
            reprehenderit amet, minus quidem ipsam a modi at quisquam corrupti
            obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, sapiente explicabo ducimus porro velit amet mollitia fugiat
            illo laboriosam, dolorem ipsam, vero odio possimus deserunt
            delectus! Aspernatur sapiente sunt consectetur. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Quod eligendi provident nisi
            voluptate voluptates laborum voluptas commodi est quos ducimus
            necessitatibus in, facere dolorem, doloremque officiis ipsum
            consequatur nemo saepe? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ea, ipsa! Omnis, beatae dignissimos excepturi
            officia facere aliquam neque. Ipsa reprehenderit amet, minus quidem
            ipsam a modi at quisquam corrupti obcaecati? sapiente explicabo
            ducimus porro velit amet mollitia fugiat illo laboriosam, dolorem
            ipsam, vero odio possimus deserunt delectus! Aspernatur sapiente
            sunt consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quod eligendi provident nisi voluptate voluptates
            laborum voluptas commodi est quos ducimus necessitatibus in, facere
            dolorem, doloremque officiis ipsum consequatur nemo saepe? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Ea, ipsa! Omnis,
            beatae dignissimos excepturi officia facere aliquam neque. Ipsa
            reprehenderit amet, minus quidem ipsam a modi at quisquam corrupti
            obcaecati?
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { responsiveLayout, alertResponsiveLayout } from '~/js/responsiveLayout';

export default {
  layout: responsiveLayout(),
  mounted() {
    alertResponsiveLayout();
  },
  data() {
    return {
      blog: {
        imageName: 'Stock7.png',
        title: 'Cheap Photography Setup ',
        width: 190,
        height: 280,
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem! Voluptas minus dolore soluta dolorum eligendi ducimus veritatis temporibus! Molestiae veniam, dolor fugiat itaque vel eaque optio blanditiis enim unde.',
        date: '30.5.2019',
        backgroundImagePosition: 'left 37%',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/typography';

.blog-slug {
  width: 100%;
  height: 100%;
  background: colors.$primary-orange;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 15px;
}

.blog-container {
  outline: 5px solid colors.$dark-green;
  width: 90%;
  padding: 5px;
  height: 85%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
}

.blog {
  // background: rgb(186, 255, 229);
  width: 100%;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image content';
  gap: 15px;
  height: 69%;

  .image {
    grid-area: image;
    // background: rgb(219, 239, 255);
    display: flex;
    justify-content: flex-end;

    .image-mask {
      position: relative;
      top: -100px;
    }
  }

  .blog-content {
    grid-area: content;
    // background: rgb(241, 219, 255);
  }

  p {
    color: colors.$dark-green;
  }
}

.blog-description {
  font-size: 18px;
  display: inline-block;
  width: 85%;
  max-width: 900px;
  line-height: 169%;
  margin-top: 15px;

  &::first-letter {
    text-transform: uppercase;
    font-weight: typography.$bold;
    font-family: typography.$serif;
    font-size: 65px;
  }
}

.background {
  width: 99%;
  height: 30%;
  position: absolute;
  top: 5px;
  left: 5px;
  justify-self: flex-end;
  border-radius: 30px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    z-index: 5;
    border: 30%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 30px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left 30%;
    opacity: 0.8;
    border-radius: 30px;
  }
}

.heading-wrapper {
  min-width: 200px;
  min-height: 100px;
  height: auto;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: rgb(113, 255, 184);
  padding: 5px 5px;
  margin-bottom: 5px;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    background: colors.$primary-black;
    position: absolute;
    top: 0%;
    right: 0;
    height: 1px;
    width: 75%;
  }

  &:after {
    content: '';
    display: inline-block;
    background: colors.$primary-black;
    position: absolute;
    bottom: 0%;
    left: 0;
    height: 1px;
    width: 75%;
  }

  .date-wrapper {
    width: 100px;
    height: 50px;
    // background: rgb(255, 104, 217);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-left: 3px solid colors.$dark-green;
  }

  h2 {
    display: inline-block;
    min-width: 180px;
    width: 60%;
    font-family: typography.$serif;
    // background: rgb(214, 214, 214);
  }
}
</style>
