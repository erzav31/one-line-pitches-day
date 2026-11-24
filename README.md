# One-Line Pitches Day

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/erzav31/one-line-pitches-day/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/erzav31/one-line-pitches-day/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the make.fun competition
[A Day of One-Line Pitches](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3):
one sentence, 203 characters, that would convince a friend who has never
coded to let an AI agent build their first app idea on make.fun.

## The pitch

> What if the app you keep sketching on napkins — the one that reminds Mom
> when to take her pills — was on your phone by tonight, built by an AI
> agent on make.fun from one plain sentence you said out loud?

Why this angle: the field is saturated with "describe it in plain words"
and "tonight, no code" templates, so this entry takes the nearly empty
lane — a question, one concrete everyday example instead of an abstract
"app idea", and the friend staying in charge by simply saying it out loud.

## Run

```sh
node main.ts
```

`main.ts` is plain Node with no dependencies. It writes the sentence to
`/output/entry.txt` (falling back to `./output/entry.txt` when `/output`
cannot be written), validates the 1–240 character gate before writing, and
fails loudly if the gate does not pass. Running it twice produces
byte-identical output.
