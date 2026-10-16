export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group:
    | 'Constrictors'
    | 'Longitudinal muscles'
    | 'Soft palate'
    | 'Larynx and tongue'
    | 'Vessels and nerves'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const structures: Structure[] = [
  {
    id: 'superior-constrictor',
    fma: 'FMA46621',
    name: 'Superior pharyngeal constrictor',
    sourceName: 'right and left superior pharyngeal constrictors',
    group: 'Constrictors',
    concepts: ['FMA46631', 'FMA46632'],
    elements: ['FJ2759', 'FJ2747'],
    color: '#c8705f',
    description:
      'The top of the three curved muscles that form the back and side walls of the pharynx. It wraps the nasal and oral parts of the throat and squeezes food downward when you swallow.',
    note: 'Both sides are grouped as one selectable set. The gap above it, where the auditory tube and levator veli palatini enter, is visible from behind.',
  },
  {
    id: 'middle-constrictor',
    fma: 'FMA46622',
    name: 'Middle pharyngeal constrictor',
    sourceName: 'right and left middle pharyngeal constrictors',
    group: 'Constrictors',
    concepts: ['FMA46633', 'FMA46634'],
    elements: ['FJ2742', 'FJ2754'],
    color: '#d98a6c',
    description:
      'A fan-shaped muscle that starts on the hyoid bone and spreads backward to the midline seam. Its upper fibres overlap the superior constrictor from behind.',
    note: 'Both sides are grouped as one selectable set.',
  },
  {
    id: 'inferior-constrictor',
    fma: 'FMA46623',
    name: 'Inferior pharyngeal constrictor',
    sourceName: 'right and left inferior pharyngeal constrictors',
    group: 'Constrictors',
    concepts: ['FMA46635', 'FMA46636'],
    elements: ['FJ2752', 'FJ2740'],
    color: '#b85f55',
    description:
      'The thickest constrictor. It starts on the thyroid and cricoid cartilages, overlaps the middle constrictor and continues into the esophagus. Its lowest fibres act as the upper esophageal sphincter.',
    note: 'Both sides are grouped as one selectable set. Its thyropharyngeal and cricopharyngeal parts are not separate meshes.',
  },
  {
    id: 'pharyngeal-raphe',
    fma: 'FMA55077',
    name: 'Pharyngeal raphe',
    sourceName: 'pharyngeal raphe',
    group: 'Constrictors',
    concepts: ['FMA55077'],
    elements: ['FJ2749'],
    color: '#e6d3b8',
    description:
      'A fibrous seam down the back of the pharynx where the left and right constrictors meet. It hangs from the base of the skull.',
    note: 'Best seen from the posterior view.',
  },
  {
    id: 'stylopharyngeus',
    fma: 'FMA46664',
    name: 'Stylopharyngeus',
    sourceName: 'right and left stylopharyngeus',
    group: 'Longitudinal muscles',
    concepts: ['FMA46667', 'FMA46668'],
    elements: ['FJ2758', 'FJ2746'],
    color: '#c99a6b',
    description:
      'A slender muscle from the styloid process of the skull. It slips between the superior and middle constrictors and lifts and widens the pharynx during swallowing.',
    note: 'Both sides are grouped as one selectable set. It is the only muscle supplied by the glossopharyngeal nerve. The right source mesh is much denser than the left.',
  },
  {
    id: 'palatopharyngeus',
    fma: 'FMA46666',
    name: 'Palatopharyngeus',
    sourceName: 'right and left palatopharyngeus',
    group: 'Longitudinal muscles',
    concepts: ['FMA46671', 'FMA46672'],
    elements: ['FJ2755', 'FJ2743'],
    color: '#d6a07f',
    description:
      'Runs from the soft palate down the inside of the pharyngeal wall to the thyroid cartilage. It raises the pharynx and larynx and forms the back arch of the tonsil bed.',
    note: 'Both sides are grouped as one selectable set. It lies inside the constrictors, so it shows best when selected or isolated.',
  },
  {
    id: 'salpingopharyngeus',
    fma: 'FMA46665',
    name: 'Salpingopharyngeus',
    sourceName: 'right and left salpingopharyngeus',
    group: 'Longitudinal muscles',
    concepts: ['FMA46669', 'FMA46670'],
    elements: ['FJ2757', 'FJ2745'],
    color: '#e3b48f',
    description:
      'A small muscle from the cartilage of the auditory tube that blends into palatopharyngeus. It helps raise the pharynx when you swallow.',
    note: 'Both sides are grouped as one selectable set. The auditory tube itself is not included.',
  },
  {
    id: 'levator-veli-palatini',
    fma: 'FMA46727',
    name: 'Levator veli palatini',
    sourceName: 'right and left levator veli palatini',
    group: 'Soft palate',
    concepts: ['FMA46728', 'FMA46729'],
    elements: ['FJ2753', 'FJ2741'],
    color: '#a87fa8',
    description:
      'Lifts the soft palate up and back against the back wall of the pharynx, sealing the nose off from the mouth when you swallow or speak.',
    note: 'Both sides are grouped as one selectable set. The soft palate tissue itself is not a separate mesh.',
  },
  {
    id: 'tensor-veli-palatini',
    fma: 'FMA46730',
    name: 'Tensor veli palatini',
    sourceName: 'right and left tensor veli palatini',
    group: 'Soft palate',
    concepts: ['FMA46731', 'FMA46732'],
    elements: ['FJ2760', 'FJ2748'],
    color: '#8f8fbf',
    description:
      'Hooks around a small bony pulley and tightens the soft palate. It also opens the auditory tube, which is why swallowing can make your ears pop.',
    note: 'Both sides are grouped as one selectable set. It sits outside the pharyngeal wall.',
  },
  {
    id: 'musculus-uvulae',
    fma: 'FMA46733',
    name: 'Musculus uvulae',
    sourceName: 'uvular muscle',
    group: 'Soft palate',
    concepts: ['FMA46733'],
    elements: ['FJ2762'],
    color: '#c290b8',
    description:
      'A small paired muscle inside the uvula. It shortens and thickens the uvula, helping the soft palate seal against the back of the pharynx.',
    note: 'One source mesh. It is small, so isolate it to see it clearly.',
  },
  {
    id: 'tongue',
    fma: 'FMA54640',
    name: 'Tongue',
    sourceName: 'tongue',
    group: 'Larynx and tongue',
    concepts: ['FMA54640'],
    elements: ['FJ2761'],
    color: '#d99a9a',
    description:
      'The back of the tongue forms the front wall of the oral part of the pharynx. When you swallow it pushes food back into the pharynx.',
    note: 'Included for orientation. The source mesh is coarse; the tongue explorer shows it in more detail.',
  },
  {
    id: 'epiglottis',
    fma: 'FMA55130',
    name: 'Epiglottis',
    sourceName: 'epiglottis',
    group: 'Larynx and tongue',
    concepts: ['FMA55130'],
    elements: ['FJ2770'],
    color: '#cfd6a0',
    description:
      'A leaf of cartilage behind the tongue. It tips back over the entrance to the larynx during swallowing, steering food around it into the lower pharynx.',
    note: 'Included for orientation. The larynx explorer shows the rest of the voice box.',
  },
  {
    id: 'hyoid-bone',
    fma: 'FMA52749',
    name: 'Hyoid bone',
    sourceName: 'hyoid bone',
    group: 'Larynx and tongue',
    concepts: ['FMA52749'],
    elements: ['FJ2772'],
    color: '#e8e1cf',
    description:
      'A U-shaped bone at the root of the tongue. The middle constrictor attaches to its horns, and it rises with the larynx when you swallow.',
    note: 'FJ2772 is used; FJ3201 is an identical copy and is excluded.',
  },
  {
    id: 'thyroid-cartilage',
    fma: 'FMA55099',
    name: 'Thyroid cartilage',
    sourceName: 'thyroid cartilage',
    group: 'Larynx and tongue',
    concepts: ['FMA55099'],
    elements: ['FJ2808'],
    color: '#b9c7cf',
    description:
      'The largest cartilage of the larynx, forming the Adam’s apple. The inferior constrictor attaches to its side.',
    note: 'Included for orientation.',
  },
  {
    id: 'cricoid-cartilage',
    fma: 'FMA9615',
    name: 'Cricoid cartilage',
    sourceName: 'cricoid cartilage',
    group: 'Larynx and tongue',
    concepts: ['FMA9615'],
    elements: ['FJ2769'],
    color: '#a7b6c0',
    description:
      'A ring of cartilage below the thyroid cartilage. The pharynx becomes the esophagus at its lower border, about level with the sixth cervical vertebra.',
    note: 'FJ2769 is used; FJ2440 and FJ6487 are copies of the same surface and are excluded. The esophagus is omitted.',
  },
  {
    id: 'arytenoid-cartilages',
    fma: 'FMA55109',
    name: 'Arytenoid cartilages',
    sourceName: 'right and left arytenoid cartilages',
    group: 'Larynx and tongue',
    concepts: ['FMA55113', 'FMA55114'],
    elements: ['FJ2792', 'FJ2775'],
    color: '#95a7b4',
    description:
      'Two small cartilages on the back of the cricoid. They face into the lower pharynx, where food passes on either side of the larynx.',
    note: 'Both sides are grouped as one selectable set.',
  },
  {
    id: 'ascending-pharyngeal-artery',
    fma: 'FMA49498',
    name: 'Ascending pharyngeal artery',
    sourceName: 'right ascending pharyngeal artery',
    group: 'Vessels and nerves',
    concepts: ['FMA49498'],
    elements: ['FJ5045'],
    color: '#b8564c',
    description:
      'A long thin branch of the external carotid artery that climbs beside the pharynx and supplies its wall, the soft palate and the tonsil.',
    note: 'Only the right artery is in the source data.',
  },
  {
    id: 'pharyngeal-venous-plexus',
    fma: 'FMA50822',
    name: 'Pharyngeal venous plexus',
    sourceName: 'pharyngeal venous plexus',
    group: 'Vessels and nerves',
    concepts: ['FMA50822'],
    elements: ['FJ5154'],
    color: '#5f7fa6',
    description:
      'A network of veins on the outer surface of the constrictors. It drains into the internal jugular vein.',
    note: 'The source mesh covers the right side only.',
  },
  {
    id: 'glossopharyngeal-nerves',
    fma: 'FMA50894',
    name: 'Glossopharyngeal nerves',
    sourceName: 'glossopharyngeal nerve (two files)',
    group: 'Vessels and nerves',
    concepts: ['FMA50894'],
    elements: ['FJ3901', 'FJ3939'],
    color: '#e0c25a',
    description:
      'The ninth cranial nerve. It carries sensation from the pharynx and back of the tongue, triggers the gag reflex and supplies stylopharyngeus.',
    note: 'Both sides are one selectable set. Both source files are labelled “left”; FJ3901 lies on the right side of the body.',
  },
  {
    id: 'pharyngeal-nerves',
    fma: 'FMA77524',
    name: 'Pharyngeal nerves',
    sourceName: 'pharyngeal nerve (two files)',
    group: 'Vessels and nerves',
    concepts: ['FMA77524'],
    elements: ['FJ4000', 'FJ3972'],
    color: '#ead27a',
    description:
      'Small branches from the pterygopalatine ganglion that carry sensation from the lining of the upper, nasal part of the pharynx.',
    note: 'Both sides are one selectable set. The pharyngeal plexus formed by the vagus and glossopharyngeal nerves is not in the source data.',
  },
]
export const groups = [
  'Constrictors',
  'Longitudinal muscles',
  'Soft palate',
  'Larynx and tongue',
  'Vessels and nerves',
] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Posterior' | 'Left lateral' | 'Anterior'
// The pharynx is a muscular tube open at the front, so its walls read best from behind.
export const defaultView: View = 'Posterior'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'superior-constrictor',
    title: 'Three stacked cups',
    text: 'Seen from behind, the superior, middle and inferior constrictors fit inside one another like stacked cups. Each lower one overlaps the one above.',
    view: 'Posterior',
  },
  {
    id: 'pharyngeal-raphe',
    title: 'The midline seam',
    text: 'The constrictors of the two sides meet at this fibrous seam, which hangs from the base of the skull.',
    view: 'Posterior',
  },
  {
    id: 'stylopharyngeus',
    title: 'Muscles that lift',
    text: 'Stylopharyngeus slips in between the superior and middle constrictors. With palatopharyngeus and salpingopharyngeus it pulls the pharynx up to meet a swallowed mouthful.',
    view: 'Left lateral',
  },
  {
    id: 'levator-veli-palatini',
    title: 'Sealing off the nose',
    text: 'Levator veli palatini lifts the soft palate against the back wall, so food and drink don’t go up into the nose.',
    view: 'Posterior',
  },
  {
    id: 'epiglottis',
    title: 'Guarding the airway',
    text: 'Below the tongue, the epiglottis tips over the larynx as the hyoid and larynx rise. Food slides past on either side into the esophagus, which starts below the cricoid.',
    view: 'Left lateral',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits inside other geometry (palatopharyngeus inside the constrictors).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
