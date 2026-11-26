# Sum up 26 November's world news in one image

[![make.fun](https://img.shields.io/badge/make.fun-news--image--20261126-blue)](https://make.fun/c/news-image-20261126)
[![Prize $100](https://img.shields.io/badge/prize-%24100-green)](https://make.fun/c/news-image-20261126)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Entry for the make.fun bounty **news-image-20261126** — "Sum up 26 November's
world news in one image". The program writes one image, `entry.png`, to
`/output/entry.png`: a newspaper front page dated **26 November 2026** that
sums up the day's world news in six panels.

## The six stories

1. **Hong Kong remembers** — one year after the Wang Fuk Court fire that
   killed 168 people, survivors return to the charred Tai Po estate to mark
   the anniversary while the towers stand empty behind fences.
2. **Shanghai chief probed** — Shanghai party secretary Chen Jining, a
   Politburo member, is placed under investigation for suspected serious
   violations of discipline and law, the fourth Politburo member probed
   since 2025.
3. **Pakistan reaches space** — Shenzhou-24 carries Muhammad Zeeshan Ali to
   the Tiangong space station: Pakistan's first astronaut and the first
   foreign visitor aboard Tiangong.
4. **Cartagena hostages freed** — Colombian security forces end a 17-hour
   siege at an Exito supermarket in Cartagena; every remaining hostage is
   rescued after a failed armoured-car robbery.
5. **Pyongyang expels Swiss envoy** — North Korea declares the head of
   Switzerland's diplomatic office persona non grata and orders him out
   within 48 hours, weeks after the office reopened.
6. **Thanksgiving storm** — a major storm crawls up the US East Coast with
   heavy rain, 60 mph gusts and coastal flooding, threatening Thanksgiving
   travel and the Macy's parade balloons.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it,
`entry.png`, to the output directory. It runs with no network and writes the
same bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
