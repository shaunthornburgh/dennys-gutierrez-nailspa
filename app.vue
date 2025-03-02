<template>
  <div class="min-h-screen flex flex-col">
    <!-- Toaster for notifications -->
    <Toaster rich-colors position="top-right" />

    <!-- ===== NAVBAR ===== -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <nuxt-link to="#home" class="text-2xl font-serif font-semibold">
          {{ $t('navbar.brand') }}<span class="text-primary">.</span>
        </nuxt-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-1 items-center">
          <nuxt-link to="#home" class="nav-link">{{ $t('navbar.home') }}</nuxt-link>
          <nuxt-link to="#services" class="nav-link">{{ $t('navbar.services') }}</nuxt-link>
          <nuxt-link to="#gallery" class="nav-link">{{ $t('navbar.gallery') }}</nuxt-link>
          <nuxt-link to="#about" class="nav-link">{{ $t('navbar.about') }}</nuxt-link>
          <nuxt-link to="#prices" class="nav-link">{{ $t('navbar.prices') }}</nuxt-link>
          <nuxt-link to="#testimonials" class="nav-link">{{ $t('navbar.testimonials') }}</nuxt-link>
          <nuxt-link to="#contact" class="btn btn-primary btn-md ml-4">{{ $t('navbar.book_now') }}</nuxt-link>
          <div class="ml-4 flex space-x-2">
            <button @click="setLocale('en')" class="nav-link" :class="{ 'text-primary': locale === 'en' }">EN</button>
            <button @click="setLocale('es')" class="nav-link" :class="{ 'text-primary': locale === 'es' }">ES</button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-neutral-800"
          @click="isOpen = !isOpen"
          :aria-label="isOpen ? $t('navbar.close_menu') : $t('navbar.open_menu')"
        >
          <X v-if="isOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Navigation Overlay -->
      <div v-if="isOpen" class="md:hidden fixed inset-0 bg-white z-40 pt-20">
        <div class="flex flex-col space-y-6 items-center py-10">
          <nuxt-link to="#home" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.home') }}</nuxt-link>
          <nuxt-link to="#services" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.services') }}</nuxt-link>
          <nuxt-link to="#gallery" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.gallery') }}</nuxt-link>
          <nuxt-link to="#about" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.about') }}</nuxt-link>
          <nuxt-link to="#prices" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.prices') }}</nuxt-link>
          <nuxt-link to="#testimonials" class="text-xl nav-link" @click="isOpen = false">{{ $t('navbar.testimonials') }}</nuxt-link>
          <nuxt-link to="#contact" class="btn btn-primary btn-lg mt-6" @click="isOpen = false">{{ $t('navbar.book_now') }}</nuxt-link>
          <!-- Language Switcher (Mobile) -->
          <div class="flex space-x-4 mt-6">
            <button @click="setLocale('en')" class="text-xl nav-link" :class="{ 'text-primary': locale === 'en' }">EN</button>
            <button @click="setLocale('es')" class="text-xl nav-link" :class="{ 'text-primary': locale === 'es' }">ES</button>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <!-- ===== HERO SECTION ===== -->
      <section id="home" class="relative h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-rose-50 to-neutral-50 opacity-60"></div>
        <div
          ref="imageRef"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/4 image-glow opacity-80 md:opacity-100 pointer-events-none select-none"
          :style="{
            backgroundImage: `url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '300px 0 0 300px',
            filter: 'saturate(0.9)',
            zIndex: 0
          }"
        ></div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-16 md:mt-0 w-full">
          <div class="max-w-xl animate-fade-in opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
            <div class="bg-white/20 text-primary text-sm py-1 px-4 rounded-lg inline-block mb-6 backdrop-blur-sm border border-primary/20 font-inter font-medium text-left">
              {{ $t('hero.tagline') }}
            </div>
            <h1 class="mb-6 text-left">
              {{ $t('hero.title_part1') }} <br />
              <span class="text-primary font-playfair">{{ $t('hero.title_part2') }}</span>
            </h1>
            <p class="text-lg md:text-xl mb-8 text-neutral-700 max-w-md font-inter text-left">
              {{ $t('hero.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <nuxt-link to="#services" class="btn btn-primary btn-lg font-inter font-medium">{{ $t('hero.explore_services') }}</nuxt-link>
              <nuxt-link to="#contact" class="btn btn-outline btn-lg font-inter font-medium">{{ $t('hero.book_appointment') }}</nuxt-link>
            </div>
          </div>
        </div>
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-soft-bounce">
          <nuxt-link to="#services" class="flex flex-col items-center text-neutral-500 hover:text-primary transition-colors font-inter">
            <span class="text-sm mb-2">{{ $t('hero.scroll_down') }}</span>
            <ChevronDown :size="20" />
          </nuxt-link>
        </div>
      </section>

      <!-- ===== SERVICES SECTION ===== -->
      <section id="services" class="section bg-neutral-50">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12 text-center">
            <div class="inline-block bg-white text-primary text-sm py-1 px-4 rounded-lg mb-4 shadow-sm font-inter font-medium">
              {{ $t('services.tagline') }}
            </div>
            <h2 class="mb-4">{{ $t('services.title') }}</h2>
            <p class="section-subtitle font-inter">
              {{ $t('services.description') }}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(service, index) in services"
              :key="service.id"
              class="service-card group animate-slide-up opacity-0"
              :style="{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }"
            >
              <div class="flex justify-between items-start mb-4">
                <div class="p-2 rounded-lg bg-primary/10 mb-4">
                  <component :is="service.icon" class="w-10 h-10 text-primary/80" />
                </div>
                <div class="text-right">
                  <div class="text-primary font-semibold text-lg font-inter">{{ service.price }}</div>
                  <div class="text-neutral-500 text-sm font-inter">{{ service.duration }}</div>
                </div>
              </div>
              <h3 class="mb-2">{{ $t(`services.items.${service.id}.title`) }}</h3>
              <p class="text-neutral-600 mb-4 font-inter">{{ $t(`services.items.${service.id}.description`) }}</p>
              <nuxt-link to="#contact" class="inline-flex items-center text-primary hover:underline text-sm font-medium font-inter">
                {{ $t('services.book_now') }}
              </nuxt-link>
            </div>
          </div>
          <div class="text-center mt-12">
            <nuxt-link to="#contact" class="btn btn-primary btn-md font-inter font-medium">{{ $t('services.view_all') }}</nuxt-link>
          </div>
        </div>
      </section>

      <!-- ===== GALLERY SECTION ===== -->
      <section id="gallery" class="section">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-lg mb-4 font-inter font-medium">
              {{ $t('gallery.tagline') }}
            </div>
            <h2 class="mb-4">{{ $t('gallery.title') }}</h2>
            <p class="section-subtitle font-inter">
              {{ $t('gallery.description') }}
            </p>
          </div>
          <div class="flex flex-wrap justify-center gap-2 mb-10">
            <button
              v-for="filter in ['All', 'Gel', 'French', 'Art', 'Minimal', 'Classic']"
              :key="filter"
              @click="activeFilter = filter"
              :class="[
                'px-4 py-2 rounded-lg text-sm transition-colors duration-300 font-inter font-medium',
                activeFilter === filter ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              ]"
            >
              {{ filter }}
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(image, index) in filteredGalleryImages"
              :key="image.id"
              class="gallery-item animate-scale-in opacity-0 rounded-xl overflow-hidden shadow-md border border-neutral-100"
              :style="{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }"
            >
              <div class="aspect-square overflow-hidden relative">
                <img
                  :src="image.src"
                  :alt="$t(`gallery.images.${image.id}.alt`)"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="gallery-overlay">
                  <button
                    @click="selectedImage = image.id"
                    class="btn btn-primary rounded-lg p-3"
                    :aria-label="$t('gallery.view_larger')"
                  >
                    <Eye :size="20" />
                  </button>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium font-playfair">{{ $t(`gallery.images.${image.id}.alt`) }}</h3>
                <span class="text-sm text-neutral-500 font-inter">{{ image.category }}</span>
              </div>
            </div>
          </div>
          <!-- Lightbox -->
          <div v-if="selectedImage !== null" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div class="relative max-w-4xl w-full">
              <button
                @click="selectedImage = null"
                class="absolute -top-12 right-0 text-white hover:text-primary"
                :aria-label="$t('gallery.close_lightbox')"
              >
                <X :size="24" />
              </button>
              <img
                :src="galleryImages.find(img => img.id === selectedImage)?.src"
                :alt="$t(`gallery.images.${selectedImage}.alt`)"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ===== ABOUT SECTION ====== -->
      <section id="about" class="section relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-lg -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-lg translate-y-1/2 -translate-x-1/2"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <div class="relative rounded-2xl overflow-hidden shadow-xl">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format"
                  :alt="$t('about.image_alt')"
                  class="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p class="text-lg italic font-serif text-neutral-700 font-playfair">
                  {{ $t('about.quote') }}
                </p>
                <p class="text-right text-sm text-neutral-500 mt-2 font-inter">{{ $t('about.quote_author') }}</p>
              </div>
            </div>
            <div>
              <div class="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-lg mb-4 font-inter font-medium">
                {{ $t('about.tagline') }}
              </div>
              <h2 class="mb-6">{{ $t('about.title') }}</h2>
              <p class="text-neutral-700 mb-4 font-inter">
                {{ $t('about.description_part1') }}
              </p>
              <p class="text-neutral-700 mb-6 font-inter">
                {{ $t('about.description_part2') }}
              </p>
              <div class="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div class="text-3xl font-serif text-primary font-medium mb-1 font-playfair">15+</div>
                  <p class="text-neutral-600 font-inter">{{ $t('about.stats.years_experience') }}</p>
                </div>
                <div>
                  <div class="text-3xl font-serif text-primary font-medium mb-1 font-playfair">5,000+</div>
                  <p class="text-neutral-600 font-inter">{{ $t('about.stats.happy_clients') }}</p>
                </div>
                <div>
                  <div class="text-3xl font-serif text-primary font-medium mb-1 font-playfair">20+</div>
                  <p class="text-neutral-600 font-inter">{{ $t('about.stats.nail_artists') }}</p>
                </div>
                <div>
                  <div class="text-3xl font-serif text-primary font-medium mb-1 font-playfair">100+</div>
                  <p class="text-neutral-600 font-inter">{{ $t('about.stats.unique_designs') }}</p>
                </div>
              </div>
              <nuxt-link to="#contact" class="btn btn-primary btn-md font-inter font-medium">{{ $t('about.meet_team') }}</nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PRICES SECTION ===== -->
      <section id="prices" class="section bg-neutral-50">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12 text-center">
            <div class="inline-block bg-white text-primary text-sm py-1 px-4 rounded-lg mb-4 shadow-sm font-inter font-medium">
              {{ $t('prices.tagline') }}
            </div>
            <h2 class="mb-4">{{ $t('prices.title') }}</h2>
            <p class="section-subtitle font-inter">
              {{ $t('prices.description') }}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="service in services"
              :key="service.id"
              class="bg-white p-6 rounded-xl shadow-md border border-neutral-100"
            >
              <h3 class="text-xl font-medium font-playfair mb-2">{{ $t(`services.items.${service.id}.title`) }}</h3>
              <p class="text-neutral-600 font-inter mb-4">{{ $t(`services.items.${service.id}.description`) }}</p>
              <div class="flex justify-between items-center">
                <span class="text-primary text-2xl font-semibold font-inter">{{ service.price }}</span>
                <span class="text-neutral-500 font-inter">{{ service.duration }}</span>
              </div>
              <nuxt-link to="#contact" class="mt-4 inline-flex items-center text-primary hover:underline text-sm font-medium font-inter">
                {{ $t('services.book_now') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TESTIMONIALS SECTION ===== -->
      <section id="testimonials" class="section bg-neutral-50 relative overflow-hidden">
        <div class="absolute top-10 left-10 w-40 h-40 rounded-lg bg-primary/5"></div>
        <div class="absolute bottom-10 right-10 w-60 h-60 rounded-lg bg-secondary/5"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-16">
            <div class="inline-block bg-white text-primary text-sm py-1 px-4 rounded-lg mb-4 shadow-sm font-inter font-medium">
              {{ $t('testimonials.tagline') }}
            </div>
            <h2 class="mb-4">{{ $t('testimonials.title') }}</h2>
            <p class="section-subtitle font-inter">
              {{ $t('testimonials.description') }}
            </p>
          </div>
          <div
            class="max-w-4xl mx-auto relative"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div class="overflow-hidden">
              <div
                class="transition-transform duration-500 ease-in-out flex"
                :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
              >
                <div
                  v-for="testimonial in testimonials"
                  :key="testimonial.id"
                  class="min-w-full px-4"
                >
                  <div class="testimonial-card">
                    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div class="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20">
                        <img
                          :src="testimonial.image"
                          :alt="$t(`testimonials.items.${testimonial.id}.name`)"
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div class="mb-4 text-primary">
                          <span v-for="(_, i) in 5" :key="i" class="text-primary mr-1 text-xl">★</span>
                        </div>
                        <p class="text-lg md:text-xl italic mb-6 text-neutral-700 font-inter">
                          "{{ $t(`testimonials.items.${testimonial.id}.quote`) }}"
                        </p>
                        <div>
                          <h4 class="font-medium text-lg font-playfair">{{ $t(`testimonials.items.${testimonial.id}.name`) }}</h4>
                          <p class="text-neutral-500 font-inter">{{ $t(`testimonials.items.${testimonial.id}.role`) }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-8 gap-2">
              <button
                @click="handlePrevTestimonial"
                class="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-primary hover:text-white transition-colors duration-300"
                :aria-label="$t('testimonials.prev_testimonial')"
              >
                <ChevronLeft :size="20" />
              </button>
              <button
                v-for="(_, index) in testimonials"
                :key="index"
                @click="activeIndex = index"
                :class="[
                  'w-3 h-3 rounded-lg mx-1',
                  activeIndex === index ? 'bg-primary' : 'bg-neutral-300'
                ]"
                :aria-label="$t('testimonials.go_to_testimonial', { index: index + 1 })"
              />
              <button
                @click="handleNextTestimonial"
                class="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-primary hover:text-white transition-colors duration-300"
                :aria-label="$t('testimonials.next_testimonial')"
              >
                <ChevronRight :size="20" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CONTACT SECTION ===== -->
      <section id="contact" class="section">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-block bg-accent text-primary text-sm py-1 px-4 rounded-lg mb-4 font-inter font-medium">
              {{ $t('contact.tagline') }}
            </div>
            <h2 class="mb-4">{{ $t('contact.title') }}</h2>
            <p class="section-subtitle font-inter">
              {{ $t('contact.description') }}
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="animate-slide-up opacity-0" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
              <div class="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
                <h3 class="text-2xl mb-6">{{ $t('contact.form_title') }}</h3>
                <form @submit.prevent="handleFormSubmit">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label for="name" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.full_name') }}</label>
                      <input
                        type="text"
                        id="name"
                        v-model="formData.name"
                        required
                        class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                        :placeholder="$t('contact.form.full_name_placeholder')"
                      />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.email') }}</label>
                      <input
                        type="email"
                        id="email"
                        v-model="formData.email"
                        required
                        class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                        :placeholder="$t('contact.form.email_placeholder')"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label for="phone" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.phone') }}</label>
                      <input
                        type="tel"
                        id="phone"
                        v-model="formData.phone"
                        class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                        :placeholder="$t('contact.form.phone_placeholder')"
                      />
                    </div>
                    <div>
                      <label for="service" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.service') }}</label>
                      <select
                        id="service"
                        v-model="formData.service"
                        required
                        class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                      >
                        <option value="">{{ $t('contact.form.service_placeholder') }}</option>
                        <option value="Classic Manicure">{{ $t('services.items.1.title') }}</option>
                        <option value="Gel Extensions">{{ $t('services.items.2.title') }}</option>
                        <option value="Luxury Spa Pedicure">{{ $t('services.items.3.title') }}</option>
                        <option value="Nail Art Design">{{ $t('services.items.4.title') }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="date" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.date_time') }}</label>
                    <input
                      type="datetime-local"
                      id="date"
                      v-model="formData.date"
                      required
                      class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="message" class="block text-sm font-medium text-neutral-700 mb-1 font-inter">{{ $t('contact.form.special_requests') }}</label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      rows="4"
                      class="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 font-inter"
                      :placeholder="$t('contact.form.special_requests_placeholder')"
                    ></textarea>
                  </div>
                  <button type="submit" class="w-full btn btn-primary btn-md font-medium font-inter">
                    {{ $t('contact.form.submit') }}
                  </button>
                </form>
              </div>
            </div>
            <div class="animate-slide-up opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
              <div class="bg-white rounded-xl shadow-lg p-8 border border-neutral-100 h-full">
                <h3 class="text-2xl mb-6">{{ $t('contact.info_title') }}</h3>
                <div class="space-y-6 mb-8">
                  <div class="contact-info">
                    <div class="p-3 rounded-lg bg-primary/10">
                      <MapPin class="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 class="font-medium font-playfair">{{ $t('contact.info.visit_title') }}</h4>
                      <p class="text-neutral-600 font-inter">{{ $t('contact.info.address') }}</p>
                    </div>
                  </div>
                  <div class="contact-info">
                    <div class="p-3 rounded-lg bg-primary/10">
                      <Phone class="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 class="font-medium font-playfair">{{ $t('contact.info.call_title') }}</h4>
                      <p class="text-neutral-600 font-inter">{{ $t('contact.info.phone') }}</p>
                    </div>
                  </div>
                  <div class="contact-info">
                    <div class="p-3 rounded-lg bg-primary/10">
                      <Mail class="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 class="font-medium font-playfair">{{ $t('contact.info.email_title') }}</h4>
                      <p class="text-neutral-600 font-inter">{{ $t('contact.info.email') }}</p>
                    </div>
                  </div>
                  <div class="contact-info">
                    <div class="p-3 rounded-lg bg-primary/10">
                      <Clock class="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 class="font-medium font-playfair">{{ $t('contact.info.hours_title') }}</h4>
                      <p class="text-neutral-600 font-inter">
                        {{ $t('contact.info.hours') }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg overflow-hidden h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30589520445!2d-74.25986630089809!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1713385941021!5m2!1sen!2sus"
                    class="w-full h-full"
                    style="border: 0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    :title="$t('contact.info.map_title')"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ===== FOOTER ===== -->
    <footer class="bg-neutral-900 text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 class="text-2xl font-serif mb-6 font-playfair">
              {{ $t('footer.brand') }}<span class="text-primary">.</span>
            </h3>
            <p class="text-neutral-400 mb-6 font-inter">
              {{ $t('footer.description') }}
            </p>
            <div class="flex space-x-4">
              <a href="#" class="p-2 bg-neutral-800 rounded-lg hover:bg-primary transition-colors duration-300" :aria-label="$t('footer.social.instagram')">
                <Instagram :size="18" />
              </a>
              <a href="#" class="p-2 bg-neutral-800 rounded-lg hover:bg-primary transition-colors duration-300" :aria-label="$t('footer.social.facebook')">
                <Facebook :size="18" />
              </a>
              <a href="#" class="p-2 bg-neutral-800 rounded-lg hover:bg-primary transition-colors duration-300" :aria-label="$t('footer.social.twitter')">
                <Twitter :size="18" />
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-6 font-playfair">{{ $t('footer.quick_links_title') }}</h4>
            <ul class="space-y-3">
              <li><nuxt-link to="#home" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.home') }}</nuxt-link></li>
              <li><nuxt-link to="#services" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.services') }}</nuxt-link></li>
              <li><nuxt-link to="#gallery" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.gallery') }}</nuxt-link></li>
              <li><nuxt-link to="#about" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.about') }}</nuxt-link></li>
              <li><nuxt-link to="#prices" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.prices') }}</nuxt-link></li>
              <li><nuxt-link to="#testimonials" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('navbar.testimonials') }}</nuxt-link></li>
              <li><nuxt-link to="#contact" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.contact') }}</nuxt-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-6 font-playfair">{{ $t('footer.services_title') }}</h4>
            <ul class="space-y-3">
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('services.items.1.title') }}</nuxt-link></li>
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('services.items.2.title') }}</nuxt-link></li>
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('services.items.3.title') }}</nuxt-link></li>
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('services.items.4.title') }}</nuxt-link></li>
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.services.paraffin') }}</nuxt-link></li>
              <li><nuxt-link to="#" class="text-neutral-400 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.services.repair') }}</nuxt-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-6 font-playfair">{{ $t('footer.contact_title') }}</h4>
            <address class="not-italic text-neutral-400 font-inter">
              <p class="mb-3">{{ $t('contact.info.address') }}</p>
              <p class="mb-3">
                <a href="tel:2125557890" class="hover:text-primary transition-colors duration-300">{{ $t('contact.info.phone') }}</a>
              </p>
              <p class="mb-3">
                <a href="mailto:appointments@polishpalettehaven.com" class="hover:text-primary transition-colors duration-300">{{ $t('contact.info.email') }}</a>
              </p>
            </address>
          </div>
        </div>
        <hr class="border-neutral-800 my-8" />
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-neutral-500 text-sm mb-4 md:mb-0 font-inter">
            {{ $t('footer.copyright', { year: currentYear }) }}
          </p>
          <div class="flex space-x-6 text-sm">
            <nuxt-link to="#" class="text-neutral-500 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.privacy_policy') }}</nuxt-link>
            <nuxt-link to="#" class="text-neutral-500 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.terms_of_service') }}</nuxt-link>
            <nuxt-link to="#" class="text-neutral-500 hover:text-primary transition-colors duration-300 font-inter">{{ $t('footer.cookie_policy') }}</nuxt-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Use the Composition API
const { t, locale, setLocale } = useI18n();

// --- NavBar state ---
const isScrolled = ref(false);
const isOpen = ref(false);

// --- Hero refs ---
const imageRef = ref(null);

// --- Gallery state ---
const selectedImage = ref(null);
const activeFilter = ref('All');

// --- Testimonials state ---
const activeIndex = ref(0);
const touchStart = ref(0);
const touchEnd = ref(0);
const timerRef = ref(null);

// --- Contact state ---
const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: ''
});

// --- Services data ---
const services = [
  { id: 1, price: '$35', duration: '45 min', icon: 'Scissors' },
  { id: 2, price: '$65', duration: '75 min', icon: 'Palette' },
  { id: 3, price: '$55', duration: '60 min', icon: 'Heart' },
  { id: 4, price: 'from $20', duration: '30+ min', icon: 'Sparkles' }
];

// --- Gallery images ---
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1000&auto=format', category: 'Gel' },
  { id: 2, src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format', category: 'French' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600014770603-0fd6989ee83e?q=80&w=1000&auto=format', category: 'Art' },
  { id: 4, src: 'https://images.unsplash.com/photo-1610992235683-e42ab16aca8c?q=80&w=1000&auto=format', category: 'Minimal' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format', category: 'Art' },
  { id: 6, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format', category: 'Classic' }
];

// --- Testimonials data ---
const testimonials = [
  { id: 1, image: 'https://randomuser.me/api/portraits/women/62.jpg' },
  { id: 2, image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 4, image: 'https://randomuser.me/api/portraits/women/79.jpg' }
];

// --- Computed properties ---
const filteredGalleryImages = computed(() => {
  return activeFilter.value === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeFilter.value);
});

const currentYear = computed(() => new Date().getFullYear());

// --- Effects ---
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  window.addEventListener('scroll', handleScroll);

  timerRef.value = setInterval(() => {
    activeIndex.value = (activeIndex.value === testimonials.length - 1) ? 0 : activeIndex.value + 1;
  }, 5000);

  onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
    if (timerRef.value) clearInterval(timerRef.value);
  });
});

// --- Handlers ---
const handlePrevTestimonial = () => {
  activeIndex.value = (activeIndex.value === 0) ? testimonials.length - 1 : activeIndex.value - 1;
};

const handleNextTestimonial = () => {
  activeIndex.value = (activeIndex.value === testimonials.length - 1) ? 0 : activeIndex.value + 1;
};

const handleTouchStart = (e) => {
  touchStart.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEnd.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStart.value - touchEnd.value > 50) {
    handleNextTestimonial();
  }
  if (touchStart.value - touchEnd.value < -50) {
    handlePrevTestimonial();
  }
};

const handleFormSubmit = () => {
  console.log('Form submitted:', formData.value);
  $toast.success($t('form.success_message'));
  formData.value = { name: '', email: '', phone: '', service: '', date: '', message: '' };
};
</script>