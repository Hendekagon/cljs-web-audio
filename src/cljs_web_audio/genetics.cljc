(ns cljs-web-audio.genetics
  (:require
    [clojure.string :as string]
    [clojure.set :as set]
    ;[clojure.core.matrix :as m]
    ))

(def amino-acids-by-symbol
  {:L {:abv "LEU", :name "Leucine"},
   :M {:abv "MET", :name "Methionine"},
   :I {:abv "ILE", :name "Isoleucine"},
   :R {:abv "ARG", :name "Arginine"},
   :A {:abv "ALA", :name "Alanine"},
   :F {:abv "PHE", :name "Phenylalanine"},
   :W {:abv "TRP", :name "Tryptophan"},
   :Q {:abv "GLN", :name "Glutamine"},
   :P {:abv "PRO", :name "Proline"},
   :D {:abv "ASP", :name "Aspartate"},
   :T {:abv "THR", :name "Threonine"},
   :C {:abv "CYS", :name "Cysteine"},
   :E {:abv "GLU", :name "Glutamate"},
   :G {:abv "GLY", :name "Glycine"},
   :Y {:abv "TYR", :name "Tyrosine"},
   :H {:abv "HIS", :name "Histidine"},
   :V {:abv "VAL", :name "Valine"},
   :S {:abv "SER", :name "Serine"},
   :N {:abv "ASN", :name "Asparagine"},
   :K {:abv "LYS", :name "Lysine"}}
  )

(defn random-acgt [n] (repeatedly n (partial rand-nth [:a :c :t :g])))

(defn normalize-aa-table-frequencies [m]
  (let [d (/ (- (reduce + (vals m)) 1) 20)]
    (zipmap (keys m) (map (fn [v] (- v d)) (vals m)))))

; http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1832087/table/T1/
; http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1832087/
(def average-aa-frequencies
  (normalize-aa-table-frequencies
    {
    :E 0.065
    :K 0.060
    :D 0.053
    :M 0.023
    :I 0.068
    :N 0.044
    :F 0.043
    :A 0.082
    :Q 0.036
    :G 0.069
    :V 0.069
    :L 0.101
    :Y 0.033
    :T 0.053
    :W 0.011
    :S 0.065
    :P 0.043
    :H 0.021
    :R 0.052
    :C 0.011
    }))

(def average-aa-frequencies1
  (normalize-aa-table-frequencies
    {
    :L 0.076,
    :M 0.018000000000000002,
    :I 0.038,
    :R 0.042,
    :A 0.07400000000000001,
    :F 0.04,
    :W 0.013000000000000001,
    :Q 0.037000000000000005,
    :P 0.05,
    :E 0.057999999999999996,
    :T 0.062000000000000006,
    :C 0.033,
    :G 0.07400000000000001,
    :Y 0.033,
    :H 0.028999999999999998,
    :V 0.068,
    :D 0.059000000000000004,
    :S 0.081,
    :N 0.044000000000000004,
    :K 0.07200000000000001
    }))

; http://www.nature.com/nbt/journal/v22/n8/suppinfo/nbt0804-1035_S1.html
; taken from the table at the end of the given Word doc (!)
; BLOSUM62 background frequencies
(def average-aa-frequencies-BLOSUM62
  (normalize-aa-table-frequencies
    {:L 0.099,
     :M 0.025,
     :I 0.068,
     :R 0.052,
     :A 0.074,
     :F 0.047,
     :W 0.013,
     :Q 0.034,
     :P 0.039,
     :D 0.054,
     :T 0.051,
     :C 0.025,
     :E 0.054,
     :G 0.074,
     :Y 0.034,
     :H 0.026,
     :V 0.073,
     :S 0.057,
     :N 0.045,
     :K 0.058}
    )
  )

(def amino-acids-names-by-symbol
  (into {} (map (fn [[s {n :name}]] [s (keyword (string/lower-case n))]) amino-acids-by-symbol)))

(def amino-acids-by-group
  {
   :aliphatic                           '(:glycine :alanine :valine :leucine :isoleucine),
   :hydroxyl-sulfur-selenium-containing '(:serine :cysteine :selenocysteine :threonine :methionine),
   :cyclic                              '(:proline),
   :aromatic                            '(:phenylalanine :tyrosine :tryptophan),
   :basic                               '(:histidine :lysine :arginine),
   :acidic-and-their-amide              '(:aspartate :glutamate :asparagine :glutamine)}
  )

(def amino-acids-by-name
  (into {} (map (fn [[s {n :name a :abv}]] [(keyword (string/lower-case n)) s]) amino-acids-by-symbol)))

(def amino-acid-groups-by-symbol
  (into {} (mapcat (fn [[gn gm]] (map (fn [m] [(amino-acids-by-name m) gn]) gm)) amino-acids-by-group)))

(def amino-acid-symbols
  (into #{} (keys amino-acids-by-symbol)))

(def amino-acid-symbols-index (zipmap (concat (keys amino-acids-by-symbol) [:- :.]) (range (+ 2 (count amino-acids-by-symbol)))))

(def amino-acid-symbols-vec (vec (sort (keys amino-acids-by-symbol))))

(def sequence-symbols-vec (into amino-acid-symbols-vec [:- :.]))

(def sequence-symbols
  (into amino-acid-symbols [:- :.]))

; dont like this :-/
(defn get-amino-acid-index [aakey]
  (amino-acid-symbols-index
    (case aakey
     :B (if (> 0.5 (rand)) :N :D)
     :Z (if (> 0.5 (rand)) :Q :E)
     :J (if (> 0.5 (rand)) :L :I)
     :X (rand-nth (keys amino-acids-names-by-symbol))
     aakey)))