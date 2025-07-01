<script setup>
const { locale, locales, setLocale } = useI18n()

const otherLocale = computed(() => {
    return locales.value.find(l => l.code !== locale.value)
})

function foldMenu () {
    document.querySelector('#nav-menu').removeAttribute('open')
}

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
                    <a href="#" class="text-lg">{{ $t('home.map') }}</a>
                </li>
                <li class="hidden lg:block mx-4">
                    <div class="text-lg" @click="setLocale(otherLocale.code)">{{ otherLocale.name }}</div>
                </li>
                <li class="lg:hidden">
                    <details id="nav-menu" class="dropdown dropdown-bottom dropdown-end">
                        <summary>
                            {{ $t('home.menu') }}
                        </summary>
                        <ul class="p-2 bg-base-100 rounded-t-none dropdown-content">
                            <li @click.capture="foldMenu"><nuxt-link to="/quizz/one" class="text-primary no-underline">{{ $t('home.start-quizz') }}</nuxt-link></li>
                            <li @click.capture="foldMenu"><a href="#partners">{{ $t('home.partners') }}</a></li>
                            <li @click.capture="foldMenu"><a href="#">{{ $t('home.map') }}</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
        <NuxtPage />
        <div class="h-16 w-full bg-neutral-200"></div>
        <div id="partners" class="py-16 px-16 md:px-28">
            <h2 class="text-primary text-3xl sm:text-5xl font-bold">{{ $t('home.partners') }}</h2>
            <p class="text-grey text-xl sm:text-2xl mt-6 max-w-lg">{{ $t('home.partners-text') }}</p>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-12">
                <div class="col-span-2 flex flex-row space-x-8">
                    <a target="_blank" href="https://www.u-bordeaux.fr/universite/notre-strategie/projets-institutionnels/act-pour-un-campus-experimental"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/france_2030.jpg" /></a>
                    <div class="w-24  sm:w-full text-neutral-500 text-xs sm:text-sm">
                        {{ $t('home.anr-financing') }}
                    </div>
                </div>
                <div><a target="_blank" href="https://www.u-bordeaux.fr/recherche/science-et-societe"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/science_societe.png" /></a></div>
                <div><a target="_blank" href="https://www.u-bordeaux.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/univ_bordeaux.png" /></a></div>
                <div><a target="_blank" href="http://weburfist.univ-bordeaux.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/urfist.png" /></a></div>
                <div><a target="_blank" href="https://www.inria.fr/fr"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/inria.png" /></a></div>
                <div><a target="_blank" href="https://www.ville-floirac33.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/floirac.jpg" /></a></div>
                <div><a target="_blank" href="https://www.inrae.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/inrae.jpg" /></a></div>
                <div><a target="_blank" href="https://www.villavalmont.com/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/valmont.png" /></a></div>
                <div><a target="_blank" href="https://www.centreemiledurkheim.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/durkheim.jpg" /></a></div>
                <div><a target="_blank" href="https://www.helloasso.com/associations/streetdefrecords"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/records.png" /></a></div>
                <div><a target="_blank" href="https://ville-ares.fr/"><img class="max-h-24 max-w-[100px] sm:max-w-[180px]" src="/ares.jpg" /></a></div>
            </div>
        </div>
        <div class="h-16 w-full bg-neutral-200"></div>
        <div id="footer" class="py-16 px-16 md:px-28 grid gap-8 grid-cls-1 lg:grid-cols-2">
            <div class="flex flex-col">
                <NuxtImg src="/ecodoc.png" class="w-32" />
                <div class="divider"></div>
                <div class="font-semibold mb-4">{{ $t('home.contact-us') }}</div>
                <div class="text-neutral-500"><a href="mailto:raphaelle.bats@u-bordeaux.fr">raphaelle.bats@u-bordeaux.fr</a></div>
                <div class="text-neutral-500"><a href="mailto:mathilde.garnier@u-bordeaux.fr">mathilde.garnier@u-bordeaux.fr</a></div>
            </div>
            <nav class="grid grid-cols-1 lg:grid-cols-3 gap-4" aria-label="Liens additionnels">
                <div class="footer-links-col">
                    <p class="mt-4 uppercase font-semibold"> Partenaires internes </p>
                    <ul>
                        <li class="mt-3">
                            <a class="text-neutral-500" href="http://weburfist.univ-bordeaux.fr/" target="_blank">URFIST</a>
                        </li>
                        <li class="mt-3">Service culture</li>
                        <li class="mt-3">
                            <a class="text-neutral-500" href="https://bibliotheques.u-bordeaux.fr/" target="_blank">Direction de la Documentation</a>
                        </li>
                        <li class="mt-3">SAPS</li>
                        <li class="mt-3">ACT</li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <p class="mt-4 uppercase font-semibold">Partenaires externes</p>
                    <ul>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://ville-ares.fr/" target="_blank">Ville d'Arès</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.ville-floirac33.fr/" target="_blank">Ville de Floirac</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.villavalmont.com/" target="_blank">Villa Valmont</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.helloasso.com/associations/streetdefrecords" target="_self">Street Def Records</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-links-col">
                    <p class="mt-4 uppercase font-semibold">Partenaires académiques</p>
                    <ul>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.inria.fr/fr" target="_blank">Inria</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.inrae.fr/" target="_blank">INRAE</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://cote.labex.u-bordeaux.fr/Unites-partenaires/UMR-BIOGECO-BIOdiversity-GEnes-COmmunities-i294.html" target="_blank">Biogeco</a>
                        </li>
                        <li class="mt-3">
                            <a  class="text-neutral-500" href="https://www.centreemiledurkheim.fr/" target="_blank">Centre Emile Durkheim</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
  