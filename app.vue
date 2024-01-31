<script setup>
const { locale, locales, setLocale } = useI18n()

const otherLocale = computed(() => {
    return locales.value.find(l => l.code !== locale.value)
})

</script>

<template>
    <div class="flex flex-col">
        <nav class="flex flex-row px-10 lg:px-20 py-8 justify-between lg:justify-start">
            <nuxt-link to="/">
                <div class="flex flex-row">
                    <img src="/logo-ecodoc.png" class="h-16" />
                    <div class="text-primary text-2xl font-bold ml-4">CITIZEN<br/>SCIENCE</div>
                </div>
            </nuxt-link>
            <ul class="menu menu-horizontal">
                <li class="hidden lg:block mx-4">
                    <nuxt-link to="/quizz/one" class="text-primary text-lg">{{ $t('home.start-quizz') }}</nuxt-link>
                </li>
                <li class="hidden lg:block mx-4">
                    <a href="#partners" class="text-lg">{{ $t('home.partners') }}</a>
                </li>
                <li class="hidden lg:block mx-4">
                    <nuxt-link to="/map" class="text-lg">{{ $t('home.map') }}</nuxt-link>
                </li>
                <li class="hidden lg:block mx-4">
                    <div class="text-lg" @click="setLocale(otherLocale.code)">{{ otherLocale.name }}</div>
                </li>
                <li class="lg:hidden">
                    <details class="dropdown dropdown-bottom dropdown-end">
                        <summary>
                            {{ $t('home.menu') }}
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none dropdown-content">
                            <li><nuxt-link to="/quizz/one" class="text-primary no-underline">{{ $t('home.start-quizz') }}</nuxt-link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
        <NuxtPage />
        <div class="h-16 w-full bg-neutral-200"></div>
        <div id="partners" class="py-16 px-16 md:px-28">
            <h2 class="text-primary text-5xl font-bold">{{ $t('home.partners') }}</h2>
            <p class="text-grey text-2xl mt-6 max-w-lg">{{ $t('home.partners-text') }}</p>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-12">
                <div class="col-span-2 flex flex-row space-x-8">
                    <img class="max-h-24 max-w-[180px]" src="/france_2030.jpg" />
                    <div class="w-full text-sm">
                        {{ $t('home.anr-financing') }}
                    </div>
                </div>
                <div><img class="max-h-24 max-w-[180px]" src="/science_societe.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/univ_bordeaux.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/urfist.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/inria.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/floirac.jpg" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/inrae.jpg" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/valmont.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/durkheim.jpg" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/records.png" /></div>
                <div><img class="max-h-24 max-w-[180px]" src="/ares.jpg" /></div>
            </div>
        </div>
        <div class="h-16 w-full bg-neutral-200"></div>
        <div id="footer" class="py-16 px-16 md:px-28 grid gap-4 grid-cls-1 lg:grid-cols-2">
            <div class="flex flex-col">
                <NuxtImg src="/ecodoc.png" class="w-32" />
                <div class="divider"></div>
                <div class="font-semibold">{{ $t('home.contact-us') }}</div>
                <div><a href="mailto:raphaelle.bats@u-bordeaux.fr">raphaelle.bats@u-bordeaux.fr</a></div>
                <div><a href="mailto:mathilde.garnier@u-bordeaux.fr">mathilde.garnier@u-bordeaux.fr</a></div>
            </div>
            <nav class="grid grid-cols-1 lg:grid-cols-3" aria-label="Liens additionnels">
                <div class="footer-links-col">
                    <p class="uppercase font-semibold"> Partenaires internes </p>
                    <ul>
                        <li>
                            <a href="http://weburfist.univ-bordeaux.fr/" target="_blank">URFIST</a>
                        </li>
                        <li>Service culture</li>
                        <li>
                            <a href="https://bibliotheques.u-bordeaux.fr/" target="_blank">Direction de la Documentation</a>
                        </li>
                        <li>SAPS</li>
                        <li>ACT</li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <p class="uppercase font-semibold">Partenaires externes</p>
                    <ul>
                        <li>
                            <a href="https://ville-ares.fr/" target="_blank">Ville d'Arès</a>
                        </li>
                        <li>
                            <a href="https://www.ville-floirac33.fr/" target="_blank">Ville de Floirac</a>
                        </li>
                        <li>
                            <a href="https://www.villavalmont.com/" target="_blank">Villa Valmont</a>
                        </li>
                        <li>
                            <a href="https://www.helloasso.com/associations/streetdefrecords" target="_self">Street Def Records</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <p class="uppercase font-semibold">Partenaires académiques</p>
                    <ul>
                        <li>
                            <a href="https://www.inria.fr/fr" target="_blank">Inria</a>
                        </li>
                        <li>
                            <a href="https://www.inrae.fr/" target="_blank">INRAE</a>
                        </li>
                        <li>
                            <a href="https://cote.labex.u-bordeaux.fr/Unites-partenaires/UMR-BIOGECO-BIOdiversity-GEnes-COmmunities-i294.html" target="_blank">Biogeco</a>
                        </li>
                        <li>
                            <a href="https://www.centreemiledurkheim.fr/" target="_blank">Centre Emile Durkheim</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
  