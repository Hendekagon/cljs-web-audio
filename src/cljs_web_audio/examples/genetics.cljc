(ns cljs-web-audio.examples.genetics)

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

(def amino-acid-symbols
  (into #{} (keys amino-acids-by-symbol)))

(def amino-acid-symbols-vec (vec (sort (keys amino-acids-by-symbol))))

(def sequence-symbols-vec (into amino-acid-symbols-vec [:- :.]))

(def sequence-symbols
  (into amino-acid-symbols [:- :.]))