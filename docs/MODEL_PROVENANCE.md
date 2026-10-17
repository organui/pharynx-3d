# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/pharynx.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d), [pancreas-3d](https://github.com/organui/pancreas-3d) and [esophagus-3d](https://github.com/organui/esophagus-3d), which also use 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs, pancreas and esophagus explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure                       | Source concept(s)             | Elements       |
| ------------------------------- | ----------------------------- | -------------- |
| Superior pharyngeal constrictor | FMA46631 right, FMA46632 left | FJ2759, FJ2747 |
| Middle pharyngeal constrictor   | FMA46633 right, FMA46634 left | FJ2742, FJ2754 |
| Inferior pharyngeal constrictor | FMA46635 right, FMA46636 left | FJ2752, FJ2740 |
| Pharyngeal raphe                | FMA55077                      | FJ2749         |
| Stylopharyngeus                 | FMA46667 right, FMA46668 left | FJ2758, FJ2746 |
| Palatopharyngeus                | FMA46671 right, FMA46672 left | FJ2755, FJ2743 |
| Salpingopharyngeus              | FMA46669 right, FMA46670 left | FJ2757, FJ2745 |
| Levator veli palatini           | FMA46728 right, FMA46729 left | FJ2753, FJ2741 |
| Tensor veli palatini            | FMA46731 right, FMA46732 left | FJ2760, FJ2748 |
| Musculus uvulae                 | FMA46733                      | FJ2762         |
| Tongue                          | FMA54640                      | FJ2761         |
| Epiglottis                      | FMA55130                      | FJ2770         |
| Hyoid bone                      | FMA52749                      | FJ2772         |
| Thyroid cartilage               | FMA55099                      | FJ2808         |
| Cricoid cartilage               | FMA9615                       | FJ2769         |
| Arytenoid cartilages            | FMA55113 right, FMA55114 left | FJ2792, FJ2775 |
| Ascending pharyngeal artery     | FMA49498 (right only)         | FJ5045         |
| Pharyngeal venous plexus        | FMA50822                      | FJ5154         |
| Glossopharyngeal nerves         | FMA50894                      | FJ3901, FJ3939 |
| Pharyngeal nerves               | FMA77524                      | FJ4000, FJ3972 |

31 elements, 279,516 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv). Side labels were checked against each mesh's bounds (source +x is the patient's left).

Decisions:

- **Muscles, not a lining.** BodyParts3D 4.3 has no pharynx, pharyngeal mucosa, tonsil, adenoid or auditory-tube mesh, so the explorer shows the pharynx through its muscular wall. The 3.0 mirror (Kevin-Mattheus-Moerman/BodyParts3D) was checked as well and has no pharyngeal muscles at all, so only 4.3 data is used.
- **Left and right grouped.** Each paired muscle is one selectable structure drawn from its two side-specific concepts, matching how the other explorers group bilateral vessels and nerves.
- **Glossopharyngeal nerve.** Both FJ3901 and FJ3939 carry the source name “Left glossopharyngeal nerve” under concept FMA50894, but FJ3901 lies entirely on the right (x −38 to −9 mm). They are grouped as one structure and the mislabel is noted in the app.
- **Duplicates excluded.** FJ3201 is an identical copy of the hyoid FJ2772. FJ2440 and FJ6487 cover the same bounds and triangle count as the cricoid FJ2769. Only one of each is used, so nothing z-fights.
- **Stylopharyngeus density.** The right mesh (FJ2758, 25,752 triangles) is much denser than the left (FJ2746, 3,268). Both are used as supplied.
- **Palatopharyngeus** is the heaviest pair (41,400 triangles per side) and makes up 30% of the model. It is kept at full resolution because the explorer applies no decimation.
- **One-sided vessels.** Only the right ascending pharyngeal artery exists in 4.3, and the pharyngeal venous plexus mesh covers the right side.
- Omitted: the esophagus (FJ2563 runs 27 cm down to the stomach and would shrink the pharynx in every fitted view), the vagus nerves and pharyngeal plexus, the skull base, cervical vertebrae, longus capitis and colli, the mandible and suprahyoid muscles, the soft-palate tissue, the nasal cavity, and the carotid and jugular vessels.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.01`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). The default posterior view looks along display +Z from behind, the anterior view along −Z, and the left lateral view looks from the patient's left (display +X), with anterior on the viewer's left. In the posterior view the right ascending pharyngeal artery is on the viewer's right, and in the anterior view on the viewer's left, as expected. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
