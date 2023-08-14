import React from 'react'

const DigitalFeatures = () => {
  return (
    <div class="container my-24 px-6 mx-auto">


    <section class="mb-32 text-gray-800 background-radial-gradient">
      <style>
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%),
            radial-gradient(1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%);
        }
      </style>

      <div class="px-6 py-12 md:px-12 text-center lg:text-left">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-12  items-center">
            <div class="mt-12 lg:mt-0">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                style="color: hsl(218, 81%, 95%)">
                Are you ready <br /><span style="color: hsl(218, 81%, 75%)">for an adventure?</span>
              </h1>
              <p class="text-lg" style="color: hsl(218, 81%, 95%)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                adipisci tenetur repudiandae rerum quos.
              </p>
            </div>
            <div class="mb-12 lg:mb-0">
              <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                style="padding-top: 56.25%">
                <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                  allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
  </div>
  )
}

export default DigitalFeatures