export type DiseaseInfo = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  overview: string;
  symptoms: string[];
  whenToSeek: string;
  assessment: string;
  treatment: string;
  followUp: string;
};

export const diseasesData: DiseaseInfo[] = [
  {
    slug: 'gra-staer-katarakt',
    title: 'Gra staer (katarakt)',
    summary: 'Skyet linse som gradvis gjor synet uklart og mer blendingsfolsomt.',
    detail: 'Vi vurderer visus, linseforandringer og operasjonsbehov med moderne forundersokelser.',
    overview:
      'Katarakt er en vanlig aldersrelatert forandring i oyets linse. Synet blir gradvis tåkete, kontrastene svekkes og mange opplever økt blending, spesielt i motlys og ved kjoring i morke.',
    symptoms: [
      'Gradvis uklart eller toket syn',
      'Sterkere blending fra lys og billykter',
      'Darligere kontrastsyn',
      'Hyppigere behov for a bytte briller',
    ],
    whenToSeek:
      'Bestill vurdering nar synet begynner a påvirke lesing, kjøring eller daglige aktiviteter.',
    assessment:
      'Ved konsultasjon gjennomfores synstest, spaltelampeundersokelse og vurdering av linseforandringer for a avgjore om operasjon er aktuelt.',
    treatment:
      'Effektiv behandling er kirurgi der den skyete linsen erstattes med en kunstig linse. Inngrepet er rutinemessig og planlegges individuelt.',
    followUp:
      'Etter behandling folges syn og tilheling opp for a sikre stabilt resultat og riktig brillebehov.',
  },
  {
    slug: 'gronn-staer-glaukom',
    title: 'Gronn staer (glaukom)',
    summary: 'En langsom skade pa synsnerven som ofte starter i sidesynet.',
    detail: 'Oppfolging med trykkmaling, synsfelt og strukturelle kontroller er sentralt.',
    overview:
      'Glaukom er en gruppe tilstander der synsnerven kan ta skade over tid. Prosessen kan vare stille i starten, og derfor er regelmessig kontroll viktig.',
    symptoms: [
      'Ofte ingen tidlige symptomer',
      'Gradvis innsnevring av sidesyn',
      'I sjeldne akutte tilfeller smerte og royksyn',
    ],
    whenToSeek:
      'Sok undersokelse ved arvelig belastning, oyetrykkshistorikk eller mistanke om synsfeltforandringer.',
    assessment:
      'Vurderingen inkluderer trykkmaling, synsfeltundersokelse og vurdering av synsnerve og netthinne med bildediagnostikk.',
    treatment:
      'Behandling kan bestå av oyedråper, laser eller kirurgi avhengig av funn og progresjon.',
    followUp:
      'Glaukom krever langvarig kontroll for å bevare synsnerven og tilpasse behandling over tid.',
  },
  {
    slug: 'torre-oyne',
    title: 'Torre oyne',
    summary: 'Ujevn tarefilm som gir sviing, sandfolelse og periodisk takesyn.',
    detail: 'Vi ser etter arsak, inflamasjon, tareproduksjon og behandling som gir stabilitet.',
    overview:
      'Torre oyne skyldes ofte ubalanse i tarefilmen. Tilstanden kan variere gjennom dagen og påvirkes av skjermbruk, inneklima, alder og medisiner.',
    symptoms: [
      'Sviing eller stikkende ubehag',
      'Sandfolelse i oyene',
      'Periodisk uklart syn',
      'Paradoksal tareflod',
    ],
    whenToSeek:
      'Bestill time hvis symptomene er vedvarende eller påvirker arbeid, lesing eller komfort.',
    assessment:
      'Klinisk vurdering inkluderer tarefilm, oyelokksfunksjon og tegn til overflateirritasjon eller betennelse.',
    treatment:
      'Tiltak tilpasses individuelt og kan inkludere smoredraper, varmebehandling, lokkhygiene og andre målrettede strategier.',
    followUp:
      'Ved kontroll vurderes effekt, symptomutvikling og behov for justering av behandlingsplan.',
  },
  {
    slug: 'amd-makuladegenerasjon',
    title: 'AMD (aldersrelatert makuladegenerasjon)',
    summary: 'Aldersrelatert makuladegenerasjon som pavirker sentralsynet og detaljlesing.',
    detail: 'Makula vurderes noye for a fange tidlige tegn og riktig videre oppfolging.',
    overview:
      'AMD rammer den sentrale delen av netthinnen (makula) og kan gjøre det vanskelig å lese, kjenne igjen ansikter og se detaljer.',
    symptoms: [
      'Uklart sentralsyn',
      'Vansker med lesing og detaljer',
      'Skjeve eller forvrengte linjer',
    ],
    whenToSeek:
      'Ta kontakt ved nyoppstått forvrengning, sentralt synstap eller rask endring i lesesyn.',
    assessment:
      'Undersokelse inkluderer vurdering av makula med klinisk undersokelse og bildediagnostikk ved behov.',
    treatment:
      'Oppfolging og behandling avhenger av type AMD og sykdomsaktivitet, med rask handling ved tegn til vaat form.',
    followUp:
      'Regelmessig kontroll er viktig for tidlig oppdagelse av progresjon og optimal oppfolging.',
  },
  {
    slug: 'diabetisk-retinopati',
    title: 'Diabetisk retinopati',
    summary: 'Karskade i netthinnen ved diabetes som kan redusere synet gradvis.',
    detail: 'Vi kontrollerer netthinneforandringer og henviser videre ved behov for behandling.',
    overview:
      'Diabetes kan påvirke de små blodkarene i netthinnen. Tidlige forandringer kan oppsta uten merkbare symptomer.',
    symptoms: [
      'Ofte symptomfattig tidlig fase',
      'Gradvis reduksjon i synskvalitet',
      'Svingende syn ved varierende blodsukker',
    ],
    whenToSeek:
      'Pasienter med diabetes bor ha regelmessige netthinnekontroller, selv uten symptomer.',
    assessment:
      'Kontroll av netthinne og karforandringer med klinisk undersokelse og eventuelle supplerende bilder.',
    treatment:
      'Ved behandlingskrevende funn planlegges videre tiltak i samarbeid med relevant spesialistnivå.',
    followUp:
      'Intervallene tilpasses funn, diabetesvarighet og total risiko for progresjon.',
  },
  {
    slug: 'uveitt',
    title: 'Uveitt',
    summary: 'Betennelse inne i oyet som kan gi smerter, lysomfintlighet og rodhet.',
    detail: 'Rask vurdering er viktig for a begrense skade og finne riktig behandlingsniva.',
    overview:
      'Uveitt er en betennelsestilstand i oyets indre strukturer. Rask diagnostikk er viktig for å unngå varig synspåvirkning.',
    symptoms: [
      'Rode oyne',
      'Smerter eller trykkfolelse',
      'Lysomfintlighet',
      'Nedsatt syn',
    ],
    whenToSeek:
      'Sok vurdering raskt ved plutselig rodhet, smerter og synsendring.',
    assessment:
      'Undersokelsen retter seg mot betennelsesgrad, lokalisasjon og mulige utløsende årsaker.',
    treatment:
      'Behandling styres av type og alvorlighet, ofte med antiinflammatoriske tiltak og tett kontroll.',
    followUp:
      'Hyppighet av kontroller avhenger av aktivitet og respons på behandling.',
  },
  {
    slug: 'netthinnelosning-og-rifter',
    title: 'Netthinnelosning og rifter',
    summary: 'Akutte symptomer med lysglimt, morke skygger eller plutselig synstap.',
    detail: 'Vi prioriterer akutt vurdering av symptomer som kan kreve rask kirurgisk oppfolging.',
    overview:
      'Netthinnerifter og netthinnelosning er potensielt alvorlige tilstander som krever rask vurdering for å bevare syn.',
    symptoms: [
      'Lysglimt i synsfeltet',
      'Plutselig okning av flytere',
      'Mork skygge eller gardin i synet',
      'Akutt synsreduksjon',
    ],
    whenToSeek:
      'Dette vurderes som hastesymptomer. Kontakt oyeklinikk eller legevakt umiddelbart.',
    assessment:
      'Akutt undersokelse av netthinne gjennomfores for å avklare rifter, losning og behov for rask behandling.',
    treatment:
      'Tiltak kan inkludere laser, frysebehandling eller kirurgi avhengig av funn og utbredelse.',
    followUp:
      'Etter behandling folges tilheling og netthinnestatus tett for å sikre best mulig synsprognose.',
  },
];

export function getDiseaseBySlug(slug: string) {
  return diseasesData.find((disease) => disease.slug === slug);
}
