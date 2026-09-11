"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ConceptIndexerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var VIEW_TYPE_CONCEPT_INDEXER = "concept-indexer-view";
var DEFAULT_MASTER_FOLDER_NAME = "Concept Indexer";
var DEFAULT_GLOBAL_INDEX_FILE_NAME = "Concept Index.md";
var TRANSLATIONS = {
  en: {
    title: "Concept Indexer",
    concept: "Concept",
    search: "Search",
    useSelection: "Use selection",
    scope: "Scope",
    allVault: "Entire vault",
    allVaultDesc: "Include all Markdown files in the vault.",
    processing: "Processing",
    together: "Together",
    togetherDesc: "Treat the selected folders as a single corpus.",
    separate: "Separate",
    separateDesc: "Analyze each selected folder as an independent corpus.",
    options: "Processing options",
    createLinks: "Create wikilinks",
    createMaster: "Create/update master page",
    createIndex: "Create/update global concept index",
    addHashtag: "Add hashtag",
    process: "Process concept",
    enterConcept: "Enter a concept.",
    selectFolder: "Select at least one folder.",
    noSelection: "Select some text in an open note first.",
    ready: "Select a scope and search for a concept.",
    noMatches: "No matches found.",
    notes: "Notes",
    occurrences: "Occurrences",
    entireVaultGroup: "Entire vault",
    openCommand: "Open Concept Indexer",
    openMaster: "Open master page",
    openIndex: "Open global index",
    searchFirst: "Search for the concept before processing it.",
    nothingEnabled: "Enable at least one processing option.",
    cancel: "Cancel",
    confirm: "Process",
    confirmProcessing: "Confirm processing",
    filesFound: "Files found",
    occurrencesFound: "Occurrences found",
    processingComplete: "Processing complete",
    filesModified: "Files modified",
    wikilinksCreated: "Wikilinks created",
    hashtagsAdded: "Hashtags added",
    masterPagesCreated: "Master pages created",
    masterPagesUpdated: "Master pages updated",
    globalIndexesCreated: "Global indexes created",
    globalIndexesUpdated: "Global indexes updated",
    processingFailed: "Processing failed. Check the developer console.",
    starting: "Starting...",
    processingFiles: "Processing files...",
    updatingMasters: "Updating master pages...",
    updatingIndex: "Updating global index...",
    searching: "Searching...",
    searchingEntireVault: "Searching entire vault...",
    searchingSelectedScope: "Searching selected scope...",
    searchingConcept: "Searching concept...",
    processingConcept: "Processing concept...",
    processingButton: "Processing...",
    exampleConcept: "Example: Corrosion Labs",
    collapseExpandScope: "Collapse / expand scope",
    linksShort: "Links",
    masterShort: "Master",
    hashtagShort: "Hashtag",
    multipleMasters: "Multiple separate master pages exist. Open them from the result groups or switch to Together.",
    masterMissing: "Master page does not exist yet.",
    multipleIndexes: "Multiple separate indexes exist. Open the desired Concept Index.md from its folder.",
    indexMissing: "Global concept index does not exist yet.",
    settingsTitle: "Concept Indexer",
    language: "Language",
    languageDesc: "Interface language for the panel and plugin settings.",
    masterFolder: "Master pages folder",
    masterFolderDesc: "Folder used to store master concept pages.",
    indexFilename: "Global index filename",
    indexFilenameDesc: "Filename used for the concept index.",
    ignoredFolders: "Ignored folders",
    ignoredFoldersDesc: "One vault-relative folder per line. Subfolders are ignored automatically."
  },
  es: {
    title: "Indexador de conceptos",
    concept: "Concepto",
    search: "Buscar",
    useSelection: "Usar selecci\xF3n",
    scope: "\xC1mbito",
    allVault: "Todo el vault",
    allVaultDesc: "Incluye todos los archivos Markdown del vault.",
    processing: "Procesamiento",
    together: "Conjunto",
    togetherDesc: "Trata las carpetas seleccionadas como un \xFAnico corpus.",
    separate: "Separado",
    separateDesc: "Analiza cada carpeta seleccionada como un corpus independiente.",
    options: "Opciones de procesamiento",
    createLinks: "Crear wikilinks",
    createMaster: "Crear/actualizar p\xE1gina maestra",
    createIndex: "Crear/actualizar \xEDndice global de conceptos",
    addHashtag: "A\xF1adir hashtag",
    process: "Procesar concepto",
    enterConcept: "Introduce un concepto.",
    selectFolder: "Selecciona al menos una carpeta.",
    noSelection: "Selecciona primero texto en una nota abierta.",
    ready: "Selecciona un \xE1mbito y busca un concepto.",
    noMatches: "No se encontraron coincidencias.",
    notes: "Notas",
    occurrences: "Apariciones",
    entireVaultGroup: "Todo el vault",
    openCommand: "Abrir Indexador de conceptos",
    openMaster: "Abrir p\xE1gina maestra",
    openIndex: "Abrir \xEDndice global",
    searchFirst: "Busca el concepto antes de procesarlo.",
    nothingEnabled: "Activa al menos una opci\xF3n de procesamiento.",
    cancel: "Cancelar",
    confirm: "Procesar",
    confirmProcessing: "Confirmar procesamiento",
    filesFound: "Archivos encontrados",
    occurrencesFound: "Apariciones encontradas",
    processingComplete: "Procesamiento completado",
    filesModified: "Archivos modificados",
    wikilinksCreated: "Wikilinks creados",
    hashtagsAdded: "Hashtags a\xF1adidos",
    masterPagesCreated: "P\xE1ginas maestras creadas",
    masterPagesUpdated: "P\xE1ginas maestras actualizadas",
    globalIndexesCreated: "\xCDndices globales creados",
    globalIndexesUpdated: "\xCDndices globales actualizados",
    processingFailed: "El procesamiento ha fallado. Revisa la consola de desarrollador.",
    starting: "Iniciando...",
    processingFiles: "Procesando archivos...",
    updatingMasters: "Actualizando p\xE1ginas maestras...",
    updatingIndex: "Actualizando \xEDndice global...",
    searching: "Buscando...",
    searchingEntireVault: "Buscando en todo el vault...",
    searchingSelectedScope: "Buscando en el \xE1mbito seleccionado...",
    searchingConcept: "Buscando concepto...",
    processingConcept: "Procesando concepto...",
    processingButton: "Procesando...",
    exampleConcept: "Ejemplo: Corrosion Labs",
    collapseExpandScope: "Plegar / desplegar \xE1mbito",
    linksShort: "Enlaces",
    masterShort: "Maestra",
    hashtagShort: "Hashtag",
    multipleMasters: "Existen varias p\xE1ginas maestras separadas. \xC1brelas desde los grupos de resultados o cambia a Conjunto.",
    masterMissing: "La p\xE1gina maestra todav\xEDa no existe.",
    multipleIndexes: "Existen varios \xEDndices separados. Abre el Concept Index.md deseado desde su carpeta.",
    indexMissing: "El \xEDndice global todav\xEDa no existe.",
    settingsTitle: "Indexador de conceptos",
    language: "Idioma",
    languageDesc: "Idioma de la interfaz del panel y de los ajustes del plugin.",
    masterFolder: "Carpeta de p\xE1ginas maestras",
    masterFolderDesc: "Carpeta usada para guardar las p\xE1ginas maestras de conceptos.",
    indexFilename: "Nombre del \xEDndice global",
    indexFilenameDesc: "Nombre de archivo usado para el \xEDndice de conceptos.",
    ignoredFolders: "Carpetas ignoradas",
    ignoredFoldersDesc: "Una carpeta relativa al vault por l\xEDnea. Sus subcarpetas se ignoran autom\xE1ticamente."
  },
  fr: {
    title: "Indexeur de concepts",
    concept: "Concept",
    search: "Rechercher",
    useSelection: "Utiliser la s\xE9lection",
    scope: "Port\xE9e",
    allVault: "Tout le vault",
    allVaultDesc: "Inclut tous les fichiers Markdown du vault.",
    processing: "Traitement",
    together: "Ensemble",
    togetherDesc: "Traite les dossiers s\xE9lectionn\xE9s comme un seul corpus.",
    separate: "S\xE9par\xE9",
    separateDesc: "Analyse chaque dossier s\xE9lectionn\xE9 comme un corpus ind\xE9pendant.",
    options: "Options de traitement",
    createLinks: "Cr\xE9er les wikilinks",
    createMaster: "Cr\xE9er/mettre \xE0 jour la page ma\xEEtre",
    createIndex: "Cr\xE9er/mettre \xE0 jour l\u2019index global des concepts",
    addHashtag: "Ajouter un hashtag",
    process: "Traiter le concept",
    enterConcept: "Saisissez un concept.",
    selectFolder: "S\xE9lectionnez au moins un dossier.",
    noSelection: "S\xE9lectionnez d\u2019abord du texte dans une note ouverte.",
    ready: "S\xE9lectionnez une port\xE9e et recherchez un concept.",
    noMatches: "Aucune correspondance trouv\xE9e.",
    notes: "Notes",
    occurrences: "Occurrences",
    entireVaultGroup: "Tout le vault",
    openCommand: "Ouvrir Indexeur de concepts",
    openMaster: "Ouvrir la page ma\xEEtre",
    openIndex: "Ouvrir l\u2019index global",
    searchFirst: "Recherchez le concept avant de le traiter.",
    nothingEnabled: "Activez au moins une option de traitement.",
    cancel: "Annuler",
    confirm: "Traiter",
    confirmProcessing: "Confirmer le traitement",
    filesFound: "Fichiers trouv\xE9s",
    occurrencesFound: "Occurrences trouv\xE9es",
    processingComplete: "Traitement termin\xE9",
    filesModified: "Fichiers modifi\xE9s",
    wikilinksCreated: "Wikilinks cr\xE9\xE9s",
    hashtagsAdded: "Hashtags ajout\xE9s",
    masterPagesCreated: "Pages ma\xEEtre cr\xE9\xE9es",
    masterPagesUpdated: "Pages ma\xEEtre mises \xE0 jour",
    globalIndexesCreated: "Index globaux cr\xE9\xE9s",
    globalIndexesUpdated: "Index globaux mis \xE0 jour",
    processingFailed: "Le traitement a \xE9chou\xE9. Consultez la console d\xE9veloppeur.",
    starting: "D\xE9marrage...",
    processingFiles: "Traitement des fichiers...",
    updatingMasters: "Mise \xE0 jour des pages ma\xEEtre...",
    updatingIndex: "Mise \xE0 jour de l\u2019index global...",
    searching: "Recherche...",
    searchingEntireVault: "Recherche dans tout le vault...",
    searchingSelectedScope: "Recherche dans la port\xE9e s\xE9lectionn\xE9e...",
    searchingConcept: "Recherche du concept...",
    processingConcept: "Traitement du concept...",
    processingButton: "Traitement...",
    exampleConcept: "Exemple : Corrosion Labs",
    collapseExpandScope: "R\xE9duire / d\xE9velopper la port\xE9e",
    linksShort: "Liens",
    masterShort: "Ma\xEEtre",
    hashtagShort: "Hashtag",
    multipleMasters: "Plusieurs pages ma\xEEtre s\xE9par\xE9es existent. Ouvrez-les depuis les groupes de r\xE9sultats ou passez en mode Ensemble.",
    masterMissing: "La page ma\xEEtre n\u2019existe pas encore.",
    multipleIndexes: "Plusieurs index s\xE9par\xE9s existent. Ouvrez le Concept Index.md souhait\xE9 depuis son dossier.",
    indexMissing: "L\u2019index global n\u2019existe pas encore.",
    settingsTitle: "Indexeur de concepts",
    language: "Langue",
    languageDesc: "Langue de l\u2019interface du panneau et des r\xE9glages du plugin.",
    masterFolder: "Dossier des pages ma\xEEtre",
    masterFolderDesc: "Dossier utilis\xE9 pour stocker les pages ma\xEEtre des concepts.",
    indexFilename: "Nom du fichier d\u2019index global",
    indexFilenameDesc: "Nom de fichier utilis\xE9 pour l\u2019index des concepts.",
    ignoredFolders: "Dossiers ignor\xE9s",
    ignoredFoldersDesc: "Un dossier relatif au vault par ligne. Les sous-dossiers sont ignor\xE9s automatiquement."
  },
  "pt-BR": {
    title: "Indexador de Conceitos",
    concept: "Conceito",
    search: "Buscar",
    useSelection: "Usar sele\xE7\xE3o",
    scope: "Escopo",
    allVault: "Vault inteiro",
    allVaultDesc: "Inclui todos os arquivos Markdown do vault.",
    processing: "Processamento",
    together: "Conjunto",
    togetherDesc: "Trata as pastas selecionadas como um \xFAnico corpus.",
    separate: "Separado",
    separateDesc: "Analisa cada pasta selecionada como um corpus independente.",
    options: "Op\xE7\xF5es de processamento",
    createLinks: "Criar wikilinks",
    createMaster: "Criar/atualizar p\xE1gina mestra",
    createIndex: "Criar/atualizar \xEDndice global de conceitos",
    addHashtag: "Adicionar hashtag",
    process: "Processar conceito",
    enterConcept: "Digite um conceito.",
    selectFolder: "Selecione pelo menos uma pasta.",
    noSelection: "Selecione primeiro um texto em uma nota aberta.",
    ready: "Selecione um escopo e pesquise um conceito.",
    noMatches: "Nenhuma ocorr\xEAncia encontrada.",
    notes: "Notas",
    occurrences: "Ocorr\xEAncias",
    entireVaultGroup: "Vault inteiro",
    openCommand: "Abrir Indexador de Conceitos",
    openMaster: "Abrir p\xE1gina mestra",
    openIndex: "Abrir \xEDndice global",
    searchFirst: "Pesquise o conceito antes de process\xE1-lo.",
    nothingEnabled: "Ative pelo menos uma op\xE7\xE3o de processamento.",
    cancel: "Cancelar",
    confirm: "Processar",
    confirmProcessing: "Confirmar processamento",
    filesFound: "Arquivos encontrados",
    occurrencesFound: "Ocorr\xEAncias encontradas",
    processingComplete: "Processamento conclu\xEDdo",
    filesModified: "Arquivos modificados",
    wikilinksCreated: "Wikilinks criados",
    hashtagsAdded: "Hashtags adicionadas",
    masterPagesCreated: "P\xE1ginas mestras criadas",
    masterPagesUpdated: "P\xE1ginas mestras atualizadas",
    globalIndexesCreated: "\xCDndices globais criados",
    globalIndexesUpdated: "\xCDndices globais atualizados",
    processingFailed: "O processamento falhou. Verifique o console do desenvolvedor.",
    starting: "Iniciando...",
    processingFiles: "Processando arquivos...",
    updatingMasters: "Atualizando p\xE1ginas mestras...",
    updatingIndex: "Atualizando \xEDndice global...",
    searching: "Buscando...",
    searchingEntireVault: "Buscando em todo o vault...",
    searchingSelectedScope: "Buscando no escopo selecionado...",
    searchingConcept: "Buscando conceito...",
    processingConcept: "Processando conceito...",
    processingButton: "Processando...",
    exampleConcept: "Exemplo: Corrosion Labs",
    collapseExpandScope: "Recolher / expandir escopo",
    linksShort: "Links",
    masterShort: "Mestra",
    hashtagShort: "Hashtag",
    multipleMasters: "Existem v\xE1rias p\xE1ginas mestras separadas. Abra-as pelos grupos de resultados ou altere para Conjunto.",
    masterMissing: "A p\xE1gina mestra ainda n\xE3o existe.",
    multipleIndexes: "Existem v\xE1rios \xEDndices separados. Abra o Concept Index.md desejado na pasta correspondente.",
    indexMissing: "O \xEDndice global de conceitos ainda n\xE3o existe.",
    settingsTitle: "Indexador de Conceitos",
    language: "Idioma",
    languageDesc: "Idioma da interface do painel e das configura\xE7\xF5es do plugin.",
    masterFolder: "Pasta das p\xE1ginas mestras",
    masterFolderDesc: "Pasta usada para armazenar as p\xE1ginas mestras dos conceitos.",
    indexFilename: "Nome do arquivo do \xEDndice global",
    indexFilenameDesc: "Nome do arquivo usado para o \xEDndice de conceitos.",
    ignoredFolders: "Pastas ignoradas",
    ignoredFoldersDesc: "Uma pasta relativa ao vault por linha. As subpastas tamb\xE9m s\xE3o ignoradas automaticamente."
  },
  de: {
    title: "Konzept-Indexer",
    concept: "Konzept",
    search: "Suchen",
    useSelection: "Auswahl verwenden",
    scope: "Bereich",
    allVault: "Gesamter Vault",
    allVaultDesc: "Alle Markdown-Dateien im Vault einbeziehen.",
    processing: "Verarbeitung",
    together: "Zusammen",
    togetherDesc: "Die ausgew\xE4hlten Ordner als einen gemeinsamen Korpus behandeln.",
    separate: "Getrennt",
    separateDesc: "Jeden ausgew\xE4hlten Ordner als eigenen Korpus analysieren.",
    options: "Verarbeitungsoptionen",
    createLinks: "Wikilinks erstellen",
    createMaster: "Masterseite erstellen/aktualisieren",
    createIndex: "Globalen Konzeptindex erstellen/aktualisieren",
    addHashtag: "Hashtag hinzuf\xFCgen",
    process: "Konzept verarbeiten",
    enterConcept: "Geben Sie ein Konzept ein.",
    selectFolder: "W\xE4hlen Sie mindestens einen Ordner aus.",
    noSelection: "W\xE4hlen Sie zuerst Text in einer ge\xF6ffneten Notiz aus.",
    ready: "W\xE4hlen Sie einen Bereich und suchen Sie nach einem Konzept.",
    noMatches: "Keine Treffer gefunden.",
    notes: "Notizen",
    occurrences: "Vorkommen",
    entireVaultGroup: "Gesamter Vault",
    openCommand: "Konzept-Indexer \xF6ffnen",
    openMaster: "Masterseite \xF6ffnen",
    openIndex: "Globalen Index \xF6ffnen",
    searchFirst: "Suchen Sie zuerst nach dem Konzept, bevor Sie es verarbeiten.",
    nothingEnabled: "Aktivieren Sie mindestens eine Verarbeitungsoption.",
    cancel: "Abbrechen",
    confirm: "Verarbeiten",
    confirmProcessing: "Verarbeitung best\xE4tigen",
    filesFound: "Gefundene Dateien",
    occurrencesFound: "Gefundene Vorkommen",
    processingComplete: "Verarbeitung abgeschlossen",
    filesModified: "Ge\xE4nderte Dateien",
    wikilinksCreated: "Erstellte Wikilinks",
    hashtagsAdded: "Hinzugef\xFCgte Hashtags",
    masterPagesCreated: "Erstellte Masterseiten",
    masterPagesUpdated: "Aktualisierte Masterseiten",
    globalIndexesCreated: "Erstellte globale Indizes",
    globalIndexesUpdated: "Aktualisierte globale Indizes",
    processingFailed: "Verarbeitung fehlgeschlagen. Pr\xFCfen Sie die Entwicklerkonsole.",
    starting: "Startet...",
    processingFiles: "Dateien werden verarbeitet...",
    updatingMasters: "Masterseiten werden aktualisiert...",
    updatingIndex: "Globaler Index wird aktualisiert...",
    searching: "Suche...",
    searchingEntireVault: "Gesamter Vault wird durchsucht...",
    searchingSelectedScope: "Ausgew\xE4hlter Bereich wird durchsucht...",
    searchingConcept: "Konzept wird gesucht...",
    processingConcept: "Konzept wird verarbeitet...",
    processingButton: "Verarbeitung...",
    exampleConcept: "Beispiel: Corrosion Labs",
    collapseExpandScope: "Bereich ein-/ausklappen",
    linksShort: "Links",
    masterShort: "Master",
    hashtagShort: "Hashtag",
    multipleMasters: "Es existieren mehrere getrennte Masterseiten. \xD6ffnen Sie sie \xFCber die Ergebnisgruppen oder wechseln Sie zu \u201EZusammen\u201C.",
    masterMissing: "Die Masterseite existiert noch nicht.",
    multipleIndexes: "Es existieren mehrere getrennte Indizes. \xD6ffnen Sie die gew\xFCnschte Concept Index.md im entsprechenden Ordner.",
    indexMissing: "Der globale Konzeptindex existiert noch nicht.",
    settingsTitle: "Konzept-Indexer",
    language: "Sprache",
    languageDesc: "Sprache der Benutzeroberfl\xE4che und der Plugin-Einstellungen.",
    masterFolder: "Ordner f\xFCr Masterseiten",
    masterFolderDesc: "Ordner zum Speichern der Masterseiten f\xFCr Konzepte.",
    indexFilename: "Dateiname des globalen Index",
    indexFilenameDesc: "Dateiname f\xFCr den Konzeptindex.",
    ignoredFolders: "Ignorierte Ordner",
    ignoredFoldersDesc: "Ein Vault-relativer Ordner pro Zeile. Unterordner werden automatisch ebenfalls ignoriert."
  },
  pl: {
    title: "Indeksator poj\u0119\u0107",
    concept: "Poj\u0119cie",
    search: "Szukaj",
    useSelection: "U\u017Cyj zaznaczenia",
    scope: "Zakres",
    allVault: "Ca\u0142y vault",
    allVaultDesc: "Uwzgl\u0119dnia wszystkie pliki Markdown w vault.",
    processing: "Przetwarzanie",
    together: "Razem",
    togetherDesc: "Traktuje wybrane foldery jako jeden wsp\xF3lny korpus.",
    separate: "Osobno",
    separateDesc: "Analizuje ka\u017Cdy wybrany folder jako niezale\u017Cny korpus.",
    options: "Opcje przetwarzania",
    createLinks: "Tw\xF3rz wikilinki",
    createMaster: "Utw\xF3rz/aktualizuj stron\u0119 g\u0142\xF3wn\u0105",
    createIndex: "Utw\xF3rz/aktualizuj globalny indeks poj\u0119\u0107",
    addHashtag: "Dodaj hashtag",
    process: "Przetw\xF3rz poj\u0119cie",
    enterConcept: "Wprowad\u017A poj\u0119cie.",
    selectFolder: "Wybierz co najmniej jeden folder.",
    noSelection: "Najpierw zaznacz tekst w otwartej notatce.",
    ready: "Wybierz zakres i wyszukaj poj\u0119cie.",
    noMatches: "Nie znaleziono dopasowa\u0144.",
    notes: "Notatki",
    occurrences: "Wyst\u0105pienia",
    entireVaultGroup: "Ca\u0142y vault",
    openCommand: "Otw\xF3rz Indeksator poj\u0119\u0107",
    openMaster: "Otw\xF3rz stron\u0119 g\u0142\xF3wn\u0105",
    openIndex: "Otw\xF3rz globalny indeks",
    searchFirst: "Najpierw wyszukaj poj\u0119cie, zanim je przetworzysz.",
    nothingEnabled: "W\u0142\u0105cz co najmniej jedn\u0105 opcj\u0119 przetwarzania.",
    cancel: "Anuluj",
    confirm: "Przetw\xF3rz",
    confirmProcessing: "Potwierd\u017A przetwarzanie",
    filesFound: "Znalezione pliki",
    occurrencesFound: "Znalezione wyst\u0105pienia",
    processingComplete: "Przetwarzanie zako\u0144czone",
    filesModified: "Zmodyfikowane pliki",
    wikilinksCreated: "Utworzone wikilinki",
    hashtagsAdded: "Dodane hashtagi",
    masterPagesCreated: "Utworzone strony g\u0142\xF3wne",
    masterPagesUpdated: "Zaktualizowane strony g\u0142\xF3wne",
    globalIndexesCreated: "Utworzone globalne indeksy",
    globalIndexesUpdated: "Zaktualizowane globalne indeksy",
    processingFailed: "Przetwarzanie nie powiod\u0142o si\u0119. Sprawd\u017A konsol\u0119 dewelopersk\u0105.",
    starting: "Uruchamianie...",
    processingFiles: "Przetwarzanie plik\xF3w...",
    updatingMasters: "Aktualizowanie stron g\u0142\xF3wnych...",
    updatingIndex: "Aktualizowanie globalnego indeksu...",
    searching: "Wyszukiwanie...",
    searchingEntireVault: "Przeszukiwanie ca\u0142ego vault...",
    searchingSelectedScope: "Przeszukiwanie wybranego zakresu...",
    searchingConcept: "Wyszukiwanie poj\u0119cia...",
    processingConcept: "Przetwarzanie poj\u0119cia...",
    processingButton: "Przetwarzanie...",
    exampleConcept: "Przyk\u0142ad: Corrosion Labs",
    collapseExpandScope: "Zwi\u0144 / rozwi\u0144 zakres",
    linksShort: "Linki",
    masterShort: "G\u0142\xF3wna",
    hashtagShort: "Hashtag",
    multipleMasters: "Istnieje kilka oddzielnych stron g\u0142\xF3wnych. Otw\xF3rz je z grup wynik\xF3w albo prze\u0142\u0105cz tryb na Razem.",
    masterMissing: "Strona g\u0142\xF3wna jeszcze nie istnieje.",
    multipleIndexes: "Istnieje kilka oddzielnych indeks\xF3w. Otw\xF3rz odpowiedni plik Concept Index.md z w\u0142a\u015Bciwego folderu.",
    indexMissing: "Globalny indeks poj\u0119\u0107 jeszcze nie istnieje.",
    settingsTitle: "Indeksator poj\u0119\u0107",
    language: "J\u0119zyk",
    languageDesc: "J\u0119zyk interfejsu panelu i ustawie\u0144 wtyczki.",
    masterFolder: "Folder stron g\u0142\xF3wnych",
    masterFolderDesc: "Folder u\u017Cywany do przechowywania stron g\u0142\xF3wnych poj\u0119\u0107.",
    indexFilename: "Nazwa pliku globalnego indeksu",
    indexFilenameDesc: "Nazwa pliku u\u017Cywanego jako indeks poj\u0119\u0107.",
    ignoredFolders: "Ignorowane foldery",
    ignoredFoldersDesc: "Jeden folder wzgl\u0119dny wzgl\u0119dem vault na lini\u0119. Podfoldery s\u0105 ignorowane automatycznie."
  },
  ja: {
    title: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30AF\u30B5\u30FC",
    concept: "\u30B3\u30F3\u30BB\u30D7\u30C8",
    search: "\u691C\u7D22",
    useSelection: "\u9078\u629E\u7BC4\u56F2\u3092\u4F7F\u7528",
    scope: "\u5BFE\u8C61\u7BC4\u56F2",
    allVault: "Vault \u5168\u4F53",
    allVaultDesc: "Vault \u5185\u306E\u3059\u3079\u3066\u306E Markdown \u30D5\u30A1\u30A4\u30EB\u3092\u5BFE\u8C61\u306B\u3057\u307E\u3059\u3002",
    processing: "\u51E6\u7406",
    together: "\u307E\u3068\u3081\u3066\u51E6\u7406",
    togetherDesc: "\u9078\u629E\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u30921\u3064\u306E\u30B3\u30FC\u30D1\u30B9\u3068\u3057\u3066\u6271\u3044\u307E\u3059\u3002",
    separate: "\u500B\u5225\u306B\u51E6\u7406",
    separateDesc: "\u9078\u629E\u3057\u305F\u5404\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u72EC\u7ACB\u3057\u305F\u30B3\u30FC\u30D1\u30B9\u3068\u3057\u3066\u89E3\u6790\u3057\u307E\u3059\u3002",
    options: "\u51E6\u7406\u30AA\u30D7\u30B7\u30E7\u30F3",
    createLinks: "Wikilink \u3092\u4F5C\u6210",
    createMaster: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u4F5C\u6210 / \u66F4\u65B0",
    createIndex: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210 / \u66F4\u65B0",
    addHashtag: "\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3092\u8FFD\u52A0",
    process: "\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u51E6\u7406",
    enterConcept: "\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    selectFolder: "\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    noSelection: "\u5148\u306B\u958B\u3044\u3066\u3044\u308B\u30CE\u30FC\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    ready: "\u5BFE\u8C61\u7BC4\u56F2\u3092\u9078\u629E\u3057\u3066\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    noMatches: "\u4E00\u81F4\u3059\u308B\u9805\u76EE\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    notes: "\u30CE\u30FC\u30C8",
    occurrences: "\u51FA\u73FE\u6570",
    entireVaultGroup: "Vault \u5168\u4F53",
    openCommand: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30AF\u30B5\u30FC\u3092\u958B\u304F",
    openMaster: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u958B\u304F",
    openIndex: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u958B\u304F",
    searchFirst: "\u51E6\u7406\u3059\u308B\u524D\u306B\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    nothingEnabled: "\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u51E6\u7406\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    confirm: "\u51E6\u7406",
    confirmProcessing: "\u51E6\u7406\u3092\u78BA\u8A8D",
    filesFound: "\u898B\u3064\u304B\u3063\u305F\u30D5\u30A1\u30A4\u30EB",
    occurrencesFound: "\u898B\u3064\u304B\u3063\u305F\u51FA\u73FE\u7B87\u6240",
    processingComplete: "\u51E6\u7406\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
    filesModified: "\u5909\u66F4\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB",
    wikilinksCreated: "\u4F5C\u6210\u3055\u308C\u305F Wikilink",
    hashtagsAdded: "\u8FFD\u52A0\u3055\u308C\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0",
    masterPagesCreated: "\u4F5C\u6210\u3055\u308C\u305F\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8",
    masterPagesUpdated: "\u66F4\u65B0\u3055\u308C\u305F\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8",
    globalIndexesCreated: "\u4F5C\u6210\u3055\u308C\u305F\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9",
    globalIndexesUpdated: "\u66F4\u65B0\u3055\u308C\u305F\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9",
    processingFailed: "\u51E6\u7406\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u958B\u767A\u8005\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    starting: "\u958B\u59CB\u3057\u3066\u3044\u307E\u3059...",
    processingFiles: "\u30D5\u30A1\u30A4\u30EB\u3092\u51E6\u7406\u3057\u3066\u3044\u307E\u3059...",
    updatingMasters: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u66F4\u65B0\u3057\u3066\u3044\u307E\u3059...",
    updatingIndex: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u66F4\u65B0\u3057\u3066\u3044\u307E\u3059...",
    searching: "\u691C\u7D22\u4E2D...",
    searchingEntireVault: "Vault \u5168\u4F53\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059...",
    searchingSelectedScope: "\u9078\u629E\u3057\u305F\u5BFE\u8C61\u7BC4\u56F2\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059...",
    searchingConcept: "\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059...",
    processingConcept: "\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u51E6\u7406\u3057\u3066\u3044\u307E\u3059...",
    processingButton: "\u51E6\u7406\u4E2D...",
    exampleConcept: "\u4F8B: Corrosion Labs",
    collapseExpandScope: "\u5BFE\u8C61\u7BC4\u56F2\u3092\u6298\u308A\u305F\u305F\u3080 / \u5C55\u958B\u3059\u308B",
    linksShort: "\u30EA\u30F3\u30AF",
    masterShort: "\u30DE\u30B9\u30BF\u30FC",
    hashtagShort: "\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0",
    multipleMasters: "\u8907\u6570\u306E\u500B\u5225\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u304C\u3042\u308A\u307E\u3059\u3002\u7D50\u679C\u30B0\u30EB\u30FC\u30D7\u304B\u3089\u958B\u304F\u304B\u3001\u300C\u307E\u3068\u3081\u3066\u51E6\u7406\u300D\u306B\u5207\u308A\u66FF\u3048\u3066\u304F\u3060\u3055\u3044\u3002",
    masterMissing: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u306F\u307E\u3060\u5B58\u5728\u3057\u307E\u305B\u3093\u3002",
    multipleIndexes: "\u8907\u6570\u306E\u500B\u5225\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u3042\u308A\u307E\u3059\u3002\u8A72\u5F53\u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u76EE\u7684\u306E Concept Index.md \u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
    indexMissing: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306F\u307E\u3060\u5B58\u5728\u3057\u307E\u305B\u3093\u3002",
    settingsTitle: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30AF\u30B5\u30FC",
    language: "\u8A00\u8A9E",
    languageDesc: "\u30D1\u30CD\u30EB\u3068\u30D7\u30E9\u30B0\u30A4\u30F3\u8A2D\u5B9A\u306E\u8868\u793A\u8A00\u8A9E\u3067\u3059\u3002",
    masterFolder: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u7528\u30D5\u30A9\u30EB\u30C0\u30FC",
    masterFolderDesc: "\u30B3\u30F3\u30BB\u30D7\u30C8\u306E\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u4FDD\u5B58\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u3067\u3059\u3002",
    indexFilename: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u30D5\u30A1\u30A4\u30EB\u540D",
    indexFilenameDesc: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u540D\u3067\u3059\u3002",
    ignoredFolders: "\u7121\u8996\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u30FC",
    ignoredFoldersDesc: "Vault \u76F8\u5BFE\u30D1\u30B9\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u30921\u884C\u306B1\u3064\u5165\u529B\u3057\u307E\u3059\u3002\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u3082\u81EA\u52D5\u7684\u306B\u7121\u8996\u3055\u308C\u307E\u3059\u3002"
  },
  "zh-CN": {
    title: "\u6982\u5FF5\u7D22\u5F15\u5668",
    concept: "\u6982\u5FF5",
    search: "\u641C\u7D22",
    useSelection: "\u4F7F\u7528\u6240\u9009\u5185\u5BB9",
    scope: "\u8303\u56F4",
    allVault: "\u6574\u4E2A Vault",
    allVaultDesc: "\u5305\u542B Vault \u4E2D\u7684\u6240\u6709 Markdown \u6587\u4EF6\u3002",
    processing: "\u5904\u7406",
    together: "\u5408\u5E76\u5904\u7406",
    togetherDesc: "\u5C06\u6240\u9009\u6587\u4EF6\u5939\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u8BED\u6599\u5E93\u5904\u7406\u3002",
    separate: "\u5206\u522B\u5904\u7406",
    separateDesc: "\u5C06\u6BCF\u4E2A\u6240\u9009\u6587\u4EF6\u5939\u4F5C\u4E3A\u72EC\u7ACB\u8BED\u6599\u5E93\u8FDB\u884C\u5206\u6790\u3002",
    options: "\u5904\u7406\u9009\u9879",
    createLinks: "\u521B\u5EFA Wikilink",
    createMaster: "\u521B\u5EFA/\u66F4\u65B0\u4E3B\u9875\u9762",
    createIndex: "\u521B\u5EFA/\u66F4\u65B0\u5168\u5C40\u6982\u5FF5\u7D22\u5F15",
    addHashtag: "\u6DFB\u52A0\u6807\u7B7E",
    process: "\u5904\u7406\u6982\u5FF5",
    enterConcept: "\u8BF7\u8F93\u5165\u6982\u5FF5\u3002",
    selectFolder: "\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u5939\u3002",
    noSelection: "\u8BF7\u5148\u5728\u6253\u5F00\u7684\u7B14\u8BB0\u4E2D\u9009\u62E9\u6587\u672C\u3002",
    ready: "\u8BF7\u9009\u62E9\u8303\u56F4\u5E76\u641C\u7D22\u4E00\u4E2A\u6982\u5FF5\u3002",
    noMatches: "\u672A\u627E\u5230\u5339\u914D\u9879\u3002",
    notes: "\u7B14\u8BB0",
    occurrences: "\u51FA\u73B0\u6B21\u6570",
    entireVaultGroup: "\u6574\u4E2A Vault",
    openCommand: "\u6253\u5F00\u6982\u5FF5\u7D22\u5F15\u5668",
    openMaster: "\u6253\u5F00\u4E3B\u9875\u9762",
    openIndex: "\u6253\u5F00\u5168\u5C40\u7D22\u5F15",
    searchFirst: "\u8BF7\u5148\u641C\u7D22\u6982\u5FF5\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u5904\u7406\u3002",
    nothingEnabled: "\u8BF7\u81F3\u5C11\u542F\u7528\u4E00\u4E2A\u5904\u7406\u9009\u9879\u3002",
    cancel: "\u53D6\u6D88",
    confirm: "\u5904\u7406",
    confirmProcessing: "\u786E\u8BA4\u5904\u7406",
    filesFound: "\u627E\u5230\u7684\u6587\u4EF6",
    occurrencesFound: "\u627E\u5230\u7684\u51FA\u73B0\u6B21\u6570",
    processingComplete: "\u5904\u7406\u5B8C\u6210",
    filesModified: "\u5DF2\u4FEE\u6539\u6587\u4EF6",
    wikilinksCreated: "\u5DF2\u521B\u5EFA\u7684 Wikilink",
    hashtagsAdded: "\u5DF2\u6DFB\u52A0\u7684\u6807\u7B7E",
    masterPagesCreated: "\u5DF2\u521B\u5EFA\u7684\u4E3B\u9875\u9762",
    masterPagesUpdated: "\u5DF2\u66F4\u65B0\u7684\u4E3B\u9875\u9762",
    globalIndexesCreated: "\u5DF2\u521B\u5EFA\u7684\u5168\u5C40\u7D22\u5F15",
    globalIndexesUpdated: "\u5DF2\u66F4\u65B0\u7684\u5168\u5C40\u7D22\u5F15",
    processingFailed: "\u5904\u7406\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u5F00\u53D1\u8005\u63A7\u5236\u53F0\u3002",
    starting: "\u6B63\u5728\u542F\u52A8...",
    processingFiles: "\u6B63\u5728\u5904\u7406\u6587\u4EF6...",
    updatingMasters: "\u6B63\u5728\u66F4\u65B0\u4E3B\u9875\u9762...",
    updatingIndex: "\u6B63\u5728\u66F4\u65B0\u5168\u5C40\u7D22\u5F15...",
    searching: "\u6B63\u5728\u641C\u7D22...",
    searchingEntireVault: "\u6B63\u5728\u641C\u7D22\u6574\u4E2A Vault...",
    searchingSelectedScope: "\u6B63\u5728\u641C\u7D22\u6240\u9009\u8303\u56F4...",
    searchingConcept: "\u6B63\u5728\u641C\u7D22\u6982\u5FF5...",
    processingConcept: "\u6B63\u5728\u5904\u7406\u6982\u5FF5...",
    processingButton: "\u5904\u7406\u4E2D...",
    exampleConcept: "\u793A\u4F8B\uFF1ACorrosion Labs",
    collapseExpandScope: "\u6298\u53E0 / \u5C55\u5F00\u8303\u56F4",
    linksShort: "\u94FE\u63A5",
    masterShort: "\u4E3B\u9875\u9762",
    hashtagShort: "\u6807\u7B7E",
    multipleMasters: "\u5B58\u5728\u591A\u4E2A\u72EC\u7ACB\u4E3B\u9875\u9762\u3002\u8BF7\u4ECE\u7ED3\u679C\u7EC4\u4E2D\u6253\u5F00\uFF0C\u6216\u5207\u6362\u5230\u201C\u5408\u5E76\u5904\u7406\u201D\u3002",
    masterMissing: "\u4E3B\u9875\u9762\u5C1A\u4E0D\u5B58\u5728\u3002",
    multipleIndexes: "\u5B58\u5728\u591A\u4E2A\u72EC\u7ACB\u7D22\u5F15\u3002\u8BF7\u4ECE\u5BF9\u5E94\u6587\u4EF6\u5939\u4E2D\u6253\u5F00\u6240\u9700\u7684 Concept Index.md\u3002",
    indexMissing: "\u5168\u5C40\u6982\u5FF5\u7D22\u5F15\u5C1A\u4E0D\u5B58\u5728\u3002",
    settingsTitle: "\u6982\u5FF5\u7D22\u5F15\u5668",
    language: "\u8BED\u8A00",
    languageDesc: "\u9762\u677F\u548C\u63D2\u4EF6\u8BBE\u7F6E\u7684\u754C\u9762\u8BED\u8A00\u3002",
    masterFolder: "\u4E3B\u9875\u9762\u6587\u4EF6\u5939",
    masterFolderDesc: "\u7528\u4E8E\u4FDD\u5B58\u6982\u5FF5\u4E3B\u9875\u9762\u7684\u6587\u4EF6\u5939\u3002",
    indexFilename: "\u5168\u5C40\u7D22\u5F15\u6587\u4EF6\u540D",
    indexFilenameDesc: "\u7528\u4E8E\u6982\u5FF5\u7D22\u5F15\u7684\u6587\u4EF6\u540D\u3002",
    ignoredFolders: "\u5FFD\u7565\u7684\u6587\u4EF6\u5939",
    ignoredFoldersDesc: "\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u76F8\u5BF9\u4E8E Vault \u7684\u6587\u4EF6\u5939\u8DEF\u5F84\u3002\u5176\u5B50\u6587\u4EF6\u5939\u4E5F\u4F1A\u81EA\u52A8\u5FFD\u7565\u3002"
  }
};
var DEFAULT_DATA = {
  ui: {
    concept: "",
    scopeAll: true,
    selectedFolders: [],
    processingMode: "together",
    createLinks: true,
    createMaster: true,
    addHashtag: false,
    scopeCollapsed: false
  },
  settings: {
    language: "en",
    masterFolder: DEFAULT_MASTER_FOLDER_NAME,
    globalIndexFileName: DEFAULT_GLOBAL_INDEX_FILE_NAME,
    ignoredFolders: []
  }
};
var ConfirmProcessModal = class extends import_obsidian.Modal {
  constructor(plugin, concept, groups, options, onConfirm) {
    super(plugin.app);
    this.plugin = plugin;
    this.concept = concept;
    this.groups = groups;
    this.options = options;
    this.onConfirm = onConfirm;
  }
  onOpen() {
    const { contentEl } = this;
    const totalFiles = new Set(
      this.groups.flatMap(
        (group) => group.results.map((result) => result.file.path)
      )
    ).size;
    const totalOccurrences = this.groups.reduce(
      (sum, group) => sum + group.results.reduce(
        (groupSum, result) => groupSum + result.occurrences,
        0
      ),
      0
    );
    contentEl.createEl("h2", {
      text: this.plugin.t("confirmProcessing")
    });
    contentEl.createEl("p", {
      text: `${this.plugin.t("concept")}: ${this.concept}`
    });
    contentEl.createEl("p", {
      text: `${this.plugin.t("filesFound")}: ${totalFiles} \xB7 ${this.plugin.t("occurrencesFound")}: ${totalOccurrences}`
    });
    const optionsList = contentEl.createEl("ul");
    if (this.options.createLinks) {
      optionsList.createEl("li", {
        text: this.plugin.t("createLinks")
      });
    }
    if (this.options.createMaster) {
      optionsList.createEl("li", {
        text: this.plugin.t("createMaster")
      });
      optionsList.createEl("li", {
        text: this.plugin.t("createIndex")
      });
    }
    if (this.options.addHashtag) {
      optionsList.createEl("li", {
        text: this.plugin.t("addHashtag")
      });
    }
    new import_obsidian.Setting(contentEl).addButton((button) => {
      button.setButtonText(this.plugin.t("cancel")).onClick(() => this.close());
    }).addButton((button) => {
      button.setButtonText(this.plugin.t("confirm")).setCta().onClick(() => {
        this.close();
        this.onConfirm();
      });
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ConceptIndexerView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.concept = "";
    this.scopeAll = true;
    this.selectedFolders = /* @__PURE__ */ new Set();
    this.processingMode = "together";
    this.groups = [];
    this.expandedFolders = /* @__PURE__ */ new Set();
    this.createLinks = true;
    this.createMaster = true;
    this.addHashtag = false;
    this.isProcessing = false;
    this.progressPhase = "";
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.isSearching = false;
    this.searchPhase = "";
    this.searchCurrent = 0;
    this.searchTotal = 0;
    this.scopeCollapsed = false;
    this.plugin = plugin;
    const state = plugin.getUiState();
    this.concept = state.concept;
    this.scopeAll = state.scopeAll;
    this.selectedFolders = new Set(
      state.selectedFolders
    );
    this.processingMode = state.processingMode;
    this.createLinks = state.createLinks;
    this.createMaster = state.createMaster;
    this.addHashtag = state.addHashtag;
    this.scopeCollapsed = state.scopeCollapsed;
  }
  getViewType() {
    return VIEW_TYPE_CONCEPT_INDEXER;
  }
  getDisplayText() {
    return this.plugin.t("title");
  }
  getIcon() {
    return "list-restart";
  }
  async onOpen() {
    this.initializeExpandedFolders();
    this.render();
  }
  persistUiState() {
    void this.plugin.updateUiState({
      concept: this.concept,
      scopeAll: this.scopeAll,
      selectedFolders: Array.from(this.selectedFolders),
      processingMode: this.processingMode,
      createLinks: this.createLinks,
      createMaster: this.createMaster,
      addHashtag: this.addHashtag,
      scopeCollapsed: this.scopeCollapsed
    });
  }
  requestRender() {
    this.render();
  }
  initializeExpandedFolders() {
    const tree = this.buildFolderTree();
    for (const node of tree) {
      if (node.children.length > 0) {
        this.expandedFolders.add(node.path);
      }
    }
  }
  buildFolderTree() {
    const folderPaths = /* @__PURE__ */ new Set();
    for (const file of this.app.vault.getMarkdownFiles()) {
      if (this.plugin.isMasterPage(file.path) || this.plugin.isIgnoredPath(file.path)) {
        continue;
      }
      const parts = file.path.split("/");
      if (parts.length <= 1) {
        continue;
      }
      parts.pop();
      let currentPath = "";
      for (const part of parts) {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        if (this.plugin.isMasterFolderPath(currentPath) || this.plugin.isIgnoredPath(currentPath)) {
          break;
        }
        folderPaths.add(currentPath);
      }
    }
    const nodeMap = /* @__PURE__ */ new Map();
    for (const path of folderPaths) {
      const parts = path.split("/");
      const name = parts[parts.length - 1];
      nodeMap.set(path, {
        path,
        name,
        children: []
      });
    }
    const roots = [];
    for (const node of nodeMap.values()) {
      const slashIndex = node.path.lastIndexOf("/");
      if (slashIndex === -1) {
        roots.push(node);
        continue;
      }
      const parentPath = node.path.substring(0, slashIndex);
      const parent = nodeMap.get(parentPath);
      if (parent) {
        parent.children.push(node);
      }
    }
    const sortNodes = (nodes) => {
      nodes.sort((a, b) => a.name.localeCompare(b.name));
      for (const node of nodes) {
        sortNodes(node.children);
      }
    };
    sortNodes(roots);
    return roots;
  }
  getSelectedFolderList() {
    return Array.from(this.selectedFolders).sort(
      (a, b) => a.localeCompare(b)
    );
  }
  toggleFolderSelection(folderPath, selected) {
    if (selected) {
      for (const existing of Array.from(this.selectedFolders)) {
        if (existing.startsWith(`${folderPath}/`)) {
          this.selectedFolders.delete(existing);
        }
      }
      const hasSelectedAncestor = Array.from(
        this.selectedFolders
      ).some(
        (existing) => folderPath.startsWith(`${existing}/`)
      );
      if (!hasSelectedAncestor) {
        this.selectedFolders.add(folderPath);
      }
    } else {
      this.selectedFolders.delete(folderPath);
    }
    this.groups = [];
    this.persistUiState();
    this.render();
  }
  renderFolderTree(container, nodes, depth = 0) {
    for (const node of nodes) {
      const row = container.createDiv({
        cls: "concept-indexer-folder-row"
      });
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "6px";
      row.style.paddingLeft = `${depth * 18}px`;
      row.style.minHeight = "30px";
      const hasChildren = node.children.length > 0;
      const expander = row.createSpan({
        text: hasChildren ? this.expandedFolders.has(node.path) ? "\u25BE" : "\u25B8" : ""
      });
      expander.style.display = "inline-block";
      expander.style.width = "16px";
      expander.style.cursor = hasChildren ? "pointer" : "default";
      expander.style.userSelect = "none";
      if (hasChildren) {
        expander.addEventListener("click", () => {
          if (this.expandedFolders.has(node.path)) {
            this.expandedFolders.delete(node.path);
          } else {
            this.expandedFolders.add(node.path);
          }
          this.render();
        });
      }
      const checkbox = row.createEl("input", {
        type: "checkbox"
      });
      const selectedByAncestor = Array.from(
        this.selectedFolders
      ).some(
        (folder) => node.path.startsWith(`${folder}/`)
      );
      checkbox.checked = this.scopeAll || this.selectedFolders.has(node.path) || selectedByAncestor;
      checkbox.disabled = this.scopeAll || selectedByAncestor;
      checkbox.addEventListener("change", () => {
        this.toggleFolderSelection(
          node.path,
          checkbox.checked
        );
      });
      const label = row.createSpan({
        text: node.name
      });
      label.style.cursor = "pointer";
      label.style.flex = "1";
      label.addEventListener("click", () => {
        if (this.scopeAll || selectedByAncestor) {
          return;
        }
        this.toggleFolderSelection(
          node.path,
          !this.selectedFolders.has(node.path)
        );
      });
      if (hasChildren && this.expandedFolders.has(node.path)) {
        this.renderFolderTree(
          container,
          node.children,
          depth + 1
        );
      }
    }
  }
  getEditorSelection() {
    return this.plugin.getEditorSelection();
  }
  async runSearchFromView(concept) {
    if (!concept) {
      new import_obsidian.Notice(this.plugin.t("enterConcept"));
      return;
    }
    if (!this.scopeAll && this.selectedFolders.size === 0) {
      new import_obsidian.Notice(this.plugin.t("selectFolder"));
      return;
    }
    this.concept = concept;
    this.persistUiState();
    this.isSearching = true;
    this.searchPhase = this.plugin.t("searching");
    this.searchCurrent = 0;
    this.searchTotal = 0;
    this.groups = [];
    this.render();
    try {
      if (this.scopeAll) {
        const results = await this.plugin.searchConcept(
          concept,
          null,
          (progress) => {
            this.searchPhase = this.plugin.t("searchingEntireVault");
            this.searchCurrent = progress.current;
            this.searchTotal = progress.total;
            if (progress.current === progress.total || progress.current % 10 === 0) {
              this.render();
            }
          }
        );
        this.groups = [
          {
            name: this.plugin.t("entireVaultGroup"),
            folders: null,
            results
          }
        ];
        return;
      }
      const folders = this.getSelectedFolderList();
      if (this.processingMode === "separate" && folders.length > 1) {
        const groups = [];
        for (const folder of folders) {
          const results = await this.plugin.searchConcept(
            concept,
            [folder],
            (progress) => {
              this.searchPhase = `Searching: ${folder}`;
              this.searchCurrent = progress.current;
              this.searchTotal = progress.total;
              if (progress.current === progress.total || progress.current % 10 === 0) {
                this.render();
              }
            }
          );
          groups.push({
            name: folder,
            folders: [folder],
            results
          });
        }
        this.groups = groups;
      } else {
        const results = await this.plugin.searchConcept(
          concept,
          folders,
          (progress) => {
            this.searchPhase = this.plugin.t("searchingSelectedScope");
            this.searchCurrent = progress.current;
            this.searchTotal = progress.total;
            if (progress.current === progress.total || progress.current % 10 === 0) {
              this.render();
            }
          }
        );
        this.groups = [
          {
            name: folders.join(" + "),
            folders,
            results
          }
        ];
      }
    } finally {
      this.isSearching = false;
      this.searchPhase = "";
      this.searchCurrent = 0;
      this.searchTotal = 0;
      this.render();
    }
  }
  processConcept() {
    if (!this.concept || this.groups.length === 0) {
      new import_obsidian.Notice(this.plugin.t("searchFirst"));
      return;
    }
    const options = {
      createLinks: this.createLinks,
      createMaster: this.createMaster,
      addHashtag: this.addHashtag
    };
    if (!options.createLinks && !options.createMaster && !options.addHashtag) {
      new import_obsidian.Notice(this.plugin.t("nothingEnabled"));
      return;
    }
    new ConfirmProcessModal(
      this.plugin,
      this.concept,
      this.groups,
      options,
      () => {
        void this.runProcessing(options);
      }
    ).open();
  }
  async runProcessing(options) {
    this.isProcessing = true;
    this.progressPhase = this.plugin.t("starting");
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.render();
    try {
      const summary = await this.plugin.processConcept(
        this.concept,
        this.groups,
        options,
        (progress) => {
          this.progressPhase = progress.phase;
          this.progressCurrent = progress.current;
          this.progressTotal = progress.total;
          this.render();
        }
      );
      new import_obsidian.Notice(
        `${this.plugin.t("processingComplete")}
${this.plugin.t("filesModified")}: ${summary.filesModified}
${this.plugin.t("wikilinksCreated")}: ${summary.wikilinksCreated}
${this.plugin.t("hashtagsAdded")}: ${summary.hashtagsAdded}
${this.plugin.t("masterPagesCreated")}: ${summary.masterPagesCreated}
${this.plugin.t("masterPagesUpdated")}: ${summary.masterPagesUpdated}
${this.plugin.t("globalIndexesCreated")}: ${summary.globalIndexesCreated}
${this.plugin.t("globalIndexesUpdated")}: ${summary.globalIndexesUpdated}`,
        1e4
      );
      await this.runSearchFromView(this.concept);
    } catch (error) {
      console.error(
        "[Concept Indexer] Processing failed",
        error
      );
      new import_obsidian.Notice(
        this.plugin.t("processingFailed"),
        8e3
      );
    } finally {
      this.isProcessing = false;
      this.progressPhase = "";
      this.progressCurrent = 0;
      this.progressTotal = 0;
      this.render();
    }
  }
  render() {
    const container = this.containerEl.children[1];
    container.empty();
    container.style.padding = "8px 10px";
    const title = container.createEl("h3", {
      text: this.plugin.t("title")
    });
    title.style.margin = "0 0 8px 0";
    let conceptInput = this.concept;
    const conceptRow = container.createDiv();
    conceptRow.style.display = "flex";
    conceptRow.style.gap = "6px";
    conceptRow.style.alignItems = "center";
    conceptRow.style.marginBottom = "8px";
    const input = conceptRow.createEl("input", {
      type: "text",
      placeholder: this.plugin.t("exampleConcept")
    });
    input.value = this.concept;
    input.style.flex = "1";
    input.style.minWidth = "0";
    input.addEventListener("input", () => {
      conceptInput = input.value.trim();
      this.concept = input.value;
      this.persistUiState();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        void this.runSearchFromView(
          conceptInput
        );
      }
    });
    const useButton = conceptRow.createEl("button", {
      text: "Use"
    });
    useButton.title = this.plugin.t("useSelection");
    useButton.addEventListener("click", () => {
      const selected = this.getEditorSelection();
      if (!selected) {
        new import_obsidian.Notice(this.plugin.t("noSelection"));
        return;
      }
      this.concept = selected;
      this.groups = [];
      this.persistUiState();
      this.render();
    });
    const searchButton = conceptRow.createEl("button", {
      text: this.plugin.t("search")
    });
    searchButton.addClass("mod-cta");
    searchButton.disabled = this.isSearching || this.isProcessing;
    searchButton.addEventListener("click", () => {
      void this.runSearchFromView(
        conceptInput
      );
    });
    if (this.isSearching) {
      const box = container.createDiv();
      box.style.marginBottom = "8px";
      box.style.fontSize = "0.9em";
      box.createSpan({
        text: `${this.searchPhase} ` + (this.searchTotal > 0 ? `${this.searchCurrent}/${this.searchTotal}` : "")
      });
      if (this.searchTotal > 0) {
        const progress = box.createEl("progress");
        progress.max = this.searchTotal;
        progress.value = this.searchCurrent;
        progress.style.width = "100%";
        progress.style.height = "8px";
        progress.style.display = "block";
        progress.style.marginTop = "4px";
      }
    }
    const scopeHeader = container.createDiv();
    scopeHeader.style.display = "flex";
    scopeHeader.style.alignItems = "center";
    scopeHeader.style.justifyContent = "space-between";
    scopeHeader.style.margin = "4px 0";
    scopeHeader.createEl("strong", {
      text: this.plugin.t("scope")
    });
    const scopeToggle = scopeHeader.createEl("button", {
      text: this.scopeCollapsed ? "\u25B8" : "\u25BE"
    });
    scopeToggle.style.padding = "2px 8px";
    scopeToggle.title = this.plugin.t("collapseExpandScope");
    scopeToggle.addEventListener("click", () => {
      this.scopeCollapsed = !this.scopeCollapsed;
      this.persistUiState();
      this.render();
    });
    if (!this.scopeCollapsed) {
      const allVaultRow = container.createDiv();
      allVaultRow.style.display = "flex";
      allVaultRow.style.alignItems = "center";
      allVaultRow.style.gap = "6px";
      allVaultRow.style.margin = "2px 0 4px 0";
      const allVaultCheckbox = allVaultRow.createEl("input", {
        type: "checkbox"
      });
      allVaultCheckbox.checked = this.scopeAll;
      allVaultCheckbox.addEventListener(
        "change",
        () => {
          this.scopeAll = allVaultCheckbox.checked;
          if (this.scopeAll) {
            this.selectedFolders.clear();
          }
          this.groups = [];
          this.persistUiState();
          this.render();
        }
      );
      allVaultRow.createSpan({
        text: this.plugin.t("allVault")
      });
      const folderTree = container.createDiv({
        cls: "concept-indexer-folder-tree"
      });
      folderTree.style.marginBottom = "6px";
      this.renderFolderTree(
        folderTree,
        this.buildFolderTree()
      );
      if (!this.scopeAll && this.selectedFolders.size > 1) {
        const modeRow = container.createDiv();
        modeRow.style.display = "flex";
        modeRow.style.alignItems = "center";
        modeRow.style.gap = "12px";
        modeRow.style.margin = "4px 0 8px 0";
        modeRow.style.fontSize = "0.9em";
        modeRow.createSpan({
          text: `${this.plugin.t("processing")}:`
        });
        const togetherLabel = modeRow.createEl("label");
        const togetherRadio = togetherLabel.createEl("input", {
          type: "radio"
        });
        togetherRadio.name = "concept-indexer-mode";
        togetherRadio.checked = this.processingMode === "together";
        togetherRadio.addEventListener(
          "change",
          () => {
            if (togetherRadio.checked) {
              this.processingMode = "together";
              this.groups = [];
              this.persistUiState();
              this.render();
            }
          }
        );
        togetherLabel.appendText(
          ` ${this.plugin.t("together")}`
        );
        const separateLabel = modeRow.createEl("label");
        const separateRadio = separateLabel.createEl("input", {
          type: "radio"
        });
        separateRadio.name = "concept-indexer-mode";
        separateRadio.checked = this.processingMode === "separate";
        separateRadio.addEventListener(
          "change",
          () => {
            if (separateRadio.checked) {
              this.processingMode = "separate";
              this.groups = [];
              this.persistUiState();
              this.render();
            }
          }
        );
        separateLabel.appendText(
          ` ${this.plugin.t("separate")}`
        );
      }
    }
    const optionsHeader = container.createEl("strong", {
      text: this.plugin.t("options")
    });
    optionsHeader.style.display = "block";
    optionsHeader.style.margin = "6px 0 4px 0";
    const optionsRow = container.createDiv();
    optionsRow.style.display = "flex";
    optionsRow.style.flexWrap = "wrap";
    optionsRow.style.gap = "10px";
    optionsRow.style.marginBottom = "8px";
    optionsRow.style.fontSize = "0.9em";
    const addOption = (labelText, value, onChange) => {
      const label = optionsRow.createEl("label");
      const checkbox = label.createEl("input", {
        type: "checkbox"
      });
      checkbox.checked = value;
      checkbox.addEventListener(
        "change",
        () => {
          onChange(
            checkbox.checked
          );
        }
      );
      label.appendText(
        ` ${labelText}`
      );
    };
    addOption(
      this.plugin.t("linksShort"),
      this.createLinks,
      (value) => {
        this.createLinks = value;
        this.persistUiState();
      }
    );
    addOption(
      this.plugin.t("masterShort"),
      this.createMaster,
      (value) => {
        this.createMaster = value;
        this.persistUiState();
      }
    );
    addOption(
      this.plugin.t("hashtagShort"),
      this.addHashtag,
      (value) => {
        this.addHashtag = value;
        this.persistUiState();
      }
    );
    if (this.isProcessing) {
      const box = container.createDiv();
      box.style.margin = "6px 0 8px 0";
      box.style.fontSize = "0.9em";
      box.createSpan({
        text: `${this.progressPhase} ` + (this.progressTotal > 0 ? `${this.progressCurrent}/${this.progressTotal}` : "")
      });
      if (this.progressTotal > 0) {
        const progress = box.createEl("progress");
        progress.max = this.progressTotal;
        progress.value = this.progressCurrent;
        progress.style.width = "100%";
        progress.style.height = "8px";
        progress.style.display = "block";
        progress.style.marginTop = "4px";
      }
    }
    if (this.groups.length > 0) {
      const topProcessRow = container.createDiv();
      topProcessRow.style.marginBottom = "8px";
      const button = topProcessRow.createEl("button", {
        text: this.isProcessing ? this.plugin.t("processingButton") : this.plugin.t("process")
      });
      button.addClass("mod-cta");
      button.style.width = "100%";
      button.disabled = this.isProcessing || this.isSearching;
      button.addEventListener(
        "click",
        () => {
          if (!this.isProcessing && !this.isSearching) {
            this.processConcept();
          }
        }
      );
    }
    if (this.groups.length > 0) {
      const accessRow = container.createDiv();
      accessRow.style.display = "flex";
      accessRow.style.gap = "6px";
      accessRow.style.marginBottom = "8px";
      const masterButton = accessRow.createEl("button", {
        text: this.plugin.t("openMaster")
      });
      masterButton.style.flex = "1";
      masterButton.addEventListener(
        "click",
        () => {
          void this.plugin.openCurrentMasterPage(
            this.concept,
            this.groups
          );
        }
      );
      const indexButton = accessRow.createEl("button", {
        text: this.plugin.t("openIndex")
      });
      indexButton.style.flex = "1";
      indexButton.addEventListener(
        "click",
        () => {
          void this.plugin.openCurrentGlobalIndex(
            this.concept,
            this.groups
          );
        }
      );
    }
    if (this.groups.length === 0) {
      const ready = container.createEl("p", {
        text: this.plugin.t("ready")
      });
      ready.style.margin = "6px 0";
      ready.style.opacity = "0.8";
      return;
    }
    const totalNotes = new Set(
      this.groups.flatMap(
        (group) => group.results.map(
          (result) => result.file.path
        )
      )
    ).size;
    const totalOccurrences = this.groups.reduce(
      (sum, group) => sum + group.results.reduce(
        (groupSum, item) => groupSum + item.occurrences,
        0
      ),
      0
    );
    const resultHeader = container.createDiv();
    resultHeader.style.margin = "6px 0 4px 0";
    resultHeader.createEl("strong", {
      text: this.concept
    });
    resultHeader.createEl("div", {
      text: `${totalNotes} notes \xB7 ${totalOccurrences} occurrences`
    }).style.fontSize = "0.9em";
    for (const group of this.groups) {
      if (this.processingMode === "separate" && this.groups.length > 1) {
        const groupOccurrences = group.results.reduce(
          (sum, item) => sum + item.occurrences,
          0
        );
        const groupTitle = container.createEl("div", {
          text: `${group.name} \xB7 ${group.results.length} notes \xB7 ${groupOccurrences} occurrences`
        });
        groupTitle.style.fontWeight = "600";
        groupTitle.style.margin = "6px 0 2px 0";
        groupTitle.style.fontSize = "0.9em";
      }
      if (group.results.length === 0) {
        const empty = container.createEl("p", {
          text: this.plugin.t("noMatches")
        });
        empty.style.margin = "4px 0";
        continue;
      }
      const list = container.createEl("ul");
      list.style.margin = "2px 0 6px 0";
      list.style.paddingLeft = "18px";
      for (const result of group.results) {
        const item = list.createEl("li");
        item.style.margin = "1px 0";
        item.style.lineHeight = "1.25";
        const link = item.createEl("a", {
          text: result.file.path,
          href: "#"
        });
        link.addEventListener(
          "click",
          (event) => {
            event.preventDefault();
            void this.app.workspace.getLeaf(false).openFile(
              result.file
            );
          }
        );
        item.appendText(
          ` \u2014 ${result.occurrences}`
        );
      }
    }
    const bottomProcessRow = container.createDiv();
    bottomProcessRow.style.marginTop = "8px";
    const bottomButton = bottomProcessRow.createEl(
      "button",
      {
        text: this.isProcessing ? this.plugin.t("processingButton") : this.plugin.t("process")
      }
    );
    bottomButton.addClass("mod-cta");
    bottomButton.style.width = "100%";
    bottomButton.disabled = this.isProcessing || this.isSearching;
    bottomButton.addEventListener(
      "click",
      () => {
        if (!this.isProcessing && !this.isSearching) {
          this.processConcept();
        }
      }
    );
  }
};
var ConceptIndexerSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", {
      text: this.plugin.t("settingsTitle")
    });
    const settings = this.plugin.getSettings();
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("language")).setDesc(this.plugin.t("languageDesc")).addDropdown((dropdown) => {
      dropdown.addOption("en", "English").addOption("es", "Espa\xF1ol").addOption("fr", "Fran\xE7ais").addOption("de", "Deutsch").addOption("pt-BR", "Portugu\xEAs (Brasil)").addOption("pl", "Polski").addOption("ja", "\u65E5\u672C\u8A9E").addOption("zh-CN", "\u7B80\u4F53\u4E2D\u6587").setValue(settings.language).onChange(async (value) => {
        settings.language = value;
        await this.plugin.updateSettings(
          settings
        );
        this.display();
        this.plugin.refreshViews();
      });
    });
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("masterFolder")).setDesc(
      this.plugin.t("masterFolderDesc")
    ).addText((text) => {
      text.setPlaceholder(
        DEFAULT_MASTER_FOLDER_NAME
      ).setValue(
        settings.masterFolder
      ).onChange(async (value) => {
        settings.masterFolder = value.trim() || DEFAULT_MASTER_FOLDER_NAME;
        await this.plugin.updateSettings(
          settings
        );
      });
    });
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("indexFilename")).setDesc(
      this.plugin.t("indexFilenameDesc")
    ).addText((text) => {
      text.setPlaceholder(
        DEFAULT_GLOBAL_INDEX_FILE_NAME
      ).setValue(
        settings.globalIndexFileName
      ).onChange(async (value) => {
        settings.globalIndexFileName = value.trim() || DEFAULT_GLOBAL_INDEX_FILE_NAME;
        await this.plugin.updateSettings(
          settings
        );
      });
    });
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("ignoredFolders")).setDesc(
      this.plugin.t("ignoredFoldersDesc")
    ).addTextArea((area) => {
      area.setPlaceholder(
        "Templates\nArchive\nExports"
      ).setValue(
        settings.ignoredFolders.join(
          "\n"
        )
      ).onChange(async (value) => {
        settings.ignoredFolders = value.split(/\r?\n/).map(
          (item) => item.trim()
        ).filter(Boolean);
        await this.plugin.updateSettings(
          settings
        );
      });
      area.inputEl.rows = 6;
    });
  }
};
var ConceptIndexerPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.lastMarkdownView = null;
    this.data = structuredClone(
      DEFAULT_DATA
    );
  }
  async onload() {
    console.log("Concept Indexer loaded");
    await this.loadPluginData();
    this.captureActiveMarkdownView();
    this.registerEvent(
      this.app.workspace.on(
        "active-leaf-change",
        () => {
          this.captureActiveMarkdownView();
        }
      )
    );
    this.registerView(
      VIEW_TYPE_CONCEPT_INDEXER,
      (leaf) => new ConceptIndexerView(
        leaf,
        this
      )
    );
    this.addCommand({
      id: "open-concept-indexer",
      name: this.t("openCommand"),
      callback: () => {
        void this.activateView();
      }
    });
    this.addRibbonIcon(
      "list-restart",
      this.t("title"),
      () => {
        void this.activateView();
      }
    );
    this.addSettingTab(
      new ConceptIndexerSettingTab(
        this.app,
        this
      )
    );
  }
  async loadPluginData() {
    var _a, _b, _c, _d, _e, _f;
    const loaded = await this.loadData();
    this.data = {
      ui: {
        ...DEFAULT_DATA.ui,
        ...(_a = loaded == null ? void 0 : loaded.ui) != null ? _a : {}
      },
      settings: {
        ...DEFAULT_DATA.settings,
        ...(_b = loaded == null ? void 0 : loaded.settings) != null ? _b : {},
        language: (_d = (_c = loaded == null ? void 0 : loaded.settings) == null ? void 0 : _c.language) != null ? _d : DEFAULT_DATA.settings.language,
        ignoredFolders: (_f = (_e = loaded == null ? void 0 : loaded.settings) == null ? void 0 : _e.ignoredFolders) != null ? _f : DEFAULT_DATA.settings.ignoredFolders
      }
    };
  }
  getUiState() {
    return {
      ...this.data.ui,
      selectedFolders: [
        ...this.data.ui.selectedFolders
      ]
    };
  }
  async updateUiState(state) {
    this.data.ui = {
      ...state,
      selectedFolders: [
        ...state.selectedFolders
      ]
    };
    await this.saveData(this.data);
  }
  t(key) {
    var _a, _b;
    const language = this.data.settings.language;
    return (_b = (_a = TRANSLATIONS[language]) == null ? void 0 : _a[key]) != null ? _b : TRANSLATIONS.en[key];
  }
  getSettings() {
    return {
      ...this.data.settings,
      ignoredFolders: [
        ...this.data.settings.ignoredFolders
      ]
    };
  }
  async updateSettings(settings) {
    this.data.settings = {
      ...settings,
      ignoredFolders: [
        ...settings.ignoredFolders
      ]
    };
    await this.saveData(this.data);
  }
  getMasterFolderName() {
    return this.data.settings.masterFolder.trim() || DEFAULT_MASTER_FOLDER_NAME;
  }
  getGlobalIndexFileName() {
    const value = this.data.settings.globalIndexFileName.trim() || DEFAULT_GLOBAL_INDEX_FILE_NAME;
    return value.toLowerCase().endsWith(".md") ? value : `${value}.md`;
  }
  isMasterFolderPath(path) {
    const masterFolder = this.getMasterFolderName();
    return path === masterFolder || path.endsWith(`/${masterFolder}`);
  }
  isIgnoredPath(path) {
    const normalized = path.replace(/\\/g, "/");
    return this.data.settings.ignoredFolders.some(
      (folder) => {
        const clean = folder.trim().replace(/^\/+|\/+$/g, "");
        if (!clean) {
          return false;
        }
        return normalized === clean || normalized.startsWith(
          `${clean}/`
        );
      }
    );
  }
  refreshViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(
      VIEW_TYPE_CONCEPT_INDEXER
    )) {
      const view = leaf.view;
      if (view instanceof ConceptIndexerView) {
        view.requestRender();
      }
    }
  }
  captureActiveMarkdownView() {
    const view = this.app.workspace.getActiveViewOfType(
      import_obsidian.MarkdownView
    );
    if (view) {
      this.lastMarkdownView = view;
    }
  }
  getEditorSelection() {
    var _a, _b;
    const activeView = this.app.workspace.getActiveViewOfType(
      import_obsidian.MarkdownView
    );
    if (activeView) {
      this.lastMarkdownView = activeView;
    }
    return (_b = (_a = this.lastMarkdownView) == null ? void 0 : _a.editor.getSelection().trim()) != null ? _b : "";
  }
  async activateView() {
    const leaf = this.getOrCreateRightLeaf();
    await leaf.setViewState({
      type: VIEW_TYPE_CONCEPT_INDEXER,
      active: true
    });
    this.app.workspace.revealLeaf(leaf);
  }
  getOrCreateRightLeaf() {
    const existingLeaves = this.app.workspace.getLeavesOfType(
      VIEW_TYPE_CONCEPT_INDEXER
    );
    if (existingLeaves.length > 0) {
      return existingLeaves[0];
    }
    const leaf = this.app.workspace.getRightLeaf(false);
    if (!leaf) {
      throw new Error(
        "Could not create the right sidebar pane."
      );
    }
    return leaf;
  }
  isMasterPage(path) {
    const masterFolder = this.getMasterFolderName();
    return path.startsWith(`${masterFolder}/`) || path.includes(`/${masterFolder}/`);
  }
  async searchConcept(concept, folders, onProgress) {
    let markdownFiles = this.app.vault.getMarkdownFiles().filter(
      (file) => !this.isMasterPage(file.path) && !this.isIgnoredPath(file.path)
    );
    if (folders) {
      markdownFiles = markdownFiles.filter(
        (file) => folders.some(
          (folder) => file.path.startsWith(
            `${folder}/`
          )
        )
      );
    }
    const results = [];
    let current = 0;
    onProgress == null ? void 0 : onProgress({
      phase: "Searching...",
      current: 0,
      total: markdownFiles.length
    });
    for (const file of markdownFiles) {
      const content = await this.app.vault.cachedRead(
        file
      );
      const occurrences = this.countOccurrences(
        content,
        concept
      );
      if (occurrences > 0) {
        results.push({
          file,
          occurrences
        });
      }
      current++;
      onProgress == null ? void 0 : onProgress({
        phase: "Searching...",
        current,
        total: markdownFiles.length
      });
    }
    results.sort(
      (a, b) => b.occurrences - a.occurrences
    );
    return results;
  }
  async processConcept(concept, groups, options, onProgress) {
    var _a, _b;
    const summary = {
      filesModified: 0,
      wikilinksCreated: 0,
      hashtagsAdded: 0,
      masterPagesCreated: 0,
      masterPagesUpdated: 0,
      globalIndexesCreated: 0,
      globalIndexesUpdated: 0
    };
    const hashtag = this.normalizeHashtag(concept);
    const masterTargets = /* @__PURE__ */ new Map();
    for (const group of groups) {
      if (options.createMaster) {
        const masterPath = this.getMasterPagePath(
          concept,
          group,
          groups.length
        );
        masterTargets.set(group.name, {
          group,
          path: masterPath
        });
      }
    }
    const modifiedFiles = /* @__PURE__ */ new Set();
    const processFiles = groups.flatMap(
      (group) => group.results
    );
    let processedFiles = 0;
    onProgress == null ? void 0 : onProgress({
      phase: "Processing files...",
      current: 0,
      total: processFiles.length
    });
    for (const group of groups) {
      const masterPath = (_b = (_a = masterTargets.get(group.name)) == null ? void 0 : _a.path) != null ? _b : this.getMasterPagePath(
        concept,
        group,
        groups.length
      );
      for (const result of group.results) {
        const file = result.file;
        if (this.isMasterPage(file.path)) {
          continue;
        }
        const original = await this.app.vault.read(file);
        let updated = original;
        let fileChanged = false;
        if (options.createLinks) {
          const replacement = this.replaceConceptSafely(
            updated,
            concept,
            this.makeWikilinkTarget(
              masterPath,
              concept
            )
          );
          updated = replacement.text;
          if (replacement.count > 0) {
            summary.wikilinksCreated += replacement.count;
            fileChanged = true;
          }
        }
        if (options.addHashtag) {
          const hashtagResult = this.addHashtagIfMissing(
            updated,
            hashtag
          );
          updated = hashtagResult.text;
          if (hashtagResult.added) {
            summary.hashtagsAdded++;
            fileChanged = true;
          }
        }
        if (fileChanged) {
          await this.app.vault.modify(
            file,
            updated
          );
          modifiedFiles.add(file.path);
        }
        processedFiles++;
        onProgress == null ? void 0 : onProgress({
          phase: "Processing files...",
          current: processedFiles,
          total: processFiles.length
        });
      }
    }
    summary.filesModified = modifiedFiles.size;
    if (options.createMaster) {
      const indexFolders = /* @__PURE__ */ new Set();
      const masterTargetList = Array.from(masterTargets.values());
      let masterCurrent = 0;
      onProgress == null ? void 0 : onProgress({
        phase: "Updating master pages...",
        current: 0,
        total: masterTargetList.length
      });
      for (const target of masterTargetList) {
        const status = await this.createOrUpdateMasterPage(
          concept,
          target.group,
          target.path
        );
        if (status === "created") {
          summary.masterPagesCreated++;
        } else {
          summary.masterPagesUpdated++;
        }
        indexFolders.add(
          this.getParentFolder(target.path)
        );
        masterCurrent++;
        onProgress == null ? void 0 : onProgress({
          phase: "Updating master pages...",
          current: masterCurrent,
          total: masterTargetList.length
        });
      }
      const indexFolderList = Array.from(indexFolders);
      let indexCurrent = 0;
      onProgress == null ? void 0 : onProgress({
        phase: "Updating global index...",
        current: 0,
        total: indexFolderList.length
      });
      for (const folderPath of indexFolderList) {
        const indexStatus = await this.createOrUpdateGlobalIndex(
          folderPath
        );
        if (indexStatus === "created") {
          summary.globalIndexesCreated++;
        } else {
          summary.globalIndexesUpdated++;
        }
        indexCurrent++;
        onProgress == null ? void 0 : onProgress({
          phase: "Updating global index...",
          current: indexCurrent,
          total: indexFolderList.length
        });
      }
    }
    return summary;
  }
  getParentFolder(path) {
    const slashIndex = path.lastIndexOf("/");
    if (slashIndex === -1) {
      return "";
    }
    return path.substring(0, slashIndex);
  }
  async createOrUpdateGlobalIndex(folderPath) {
    var _a, _b;
    await this.ensureFolder(folderPath);
    const prefix = folderPath ? `${folderPath}/` : "";
    const indexPath = `${prefix}${this.getGlobalIndexFileName()}`;
    const masterFiles = this.app.vault.getMarkdownFiles().filter((file) => {
      if (file.path === indexPath) {
        return false;
      }
      const parent = this.getParentFolder(file.path);
      return parent === folderPath;
    });
    const entries = [];
    for (const file of masterFiles) {
      const content2 = await this.app.vault.read(file);
      const headingMatch = content2.match(/^#\s+(.+)$/m);
      const concept = ((_a = headingMatch == null ? void 0 : headingMatch[1]) == null ? void 0 : _a.trim()) || file.basename;
      const notes = ((_b = content2.match(/^### \[\[/gm)) != null ? _b : []).length;
      entries.push({
        concept,
        path: file.path.replace(/\.md$/i, ""),
        notes
      });
    }
    entries.sort(
      (a, b) => a.concept.localeCompare(
        b.concept,
        void 0,
        { sensitivity: "base" }
      )
    );
    const lines = entries.map(
      (entry) => `- [[${entry.path}|${entry.concept}]] \u2014 ${entry.notes} ${entry.notes === 1 ? "note" : "notes"}`
    );
    const content = `# Concept Index

## Concepts

${lines.join("\n") || "_No concepts indexed._"}
`;
    const existing = this.app.vault.getAbstractFileByPath(
      indexPath
    );
    if (existing instanceof import_obsidian.TFile) {
      await this.app.vault.modify(
        existing,
        content
      );
      return "updated";
    }
    await this.app.vault.create(
      indexPath,
      content
    );
    return "created";
  }
  async openCurrentMasterPage(concept, groups) {
    if (!concept || groups.length === 0) {
      new import_obsidian.Notice(this.t("searchFirst"));
      return;
    }
    if (groups.length > 1) {
      new import_obsidian.Notice(
        this.t("multipleMasters")
      );
      return;
    }
    const masterPath = this.getMasterPagePath(
      concept,
      groups[0],
      groups.length
    );
    const file = this.app.vault.getAbstractFileByPath(
      masterPath
    );
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice(
        this.t("masterMissing")
      );
      return;
    }
    await this.app.workspace.getLeaf(false).openFile(file);
  }
  async openCurrentGlobalIndex(concept, groups) {
    if (!concept || groups.length === 0) {
      new import_obsidian.Notice(this.t("searchFirst"));
      return;
    }
    if (groups.length > 1) {
      new import_obsidian.Notice(
        this.t("multipleIndexes")
      );
      return;
    }
    const masterPath = this.getMasterPagePath(
      concept,
      groups[0],
      groups.length
    );
    const folderPath = this.getParentFolder(
      masterPath
    );
    const prefix = folderPath ? `${folderPath}/` : "";
    const indexPath = `${prefix}${this.getGlobalIndexFileName()}`;
    const file = this.app.vault.getAbstractFileByPath(
      indexPath
    );
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice(
        this.t("indexMissing")
      );
      return;
    }
    await this.app.workspace.getLeaf(false).openFile(file);
  }
  getMasterPagePath(concept, group, totalGroups) {
    const safeName = this.sanitizeFileName(concept);
    if (group.folders === null) {
      return `${this.getMasterFolderName()}/${safeName}.md`;
    }
    if (totalGroups > 1 && group.folders.length === 1) {
      return `${group.folders[0]}/${this.getMasterFolderName()}/${safeName}.md`;
    }
    if (group.folders.length === 1) {
      return `${group.folders[0]}/${this.getMasterFolderName()}/${safeName}.md`;
    }
    return `${this.getMasterFolderName()}/${safeName}.md`;
  }
  makeWikilinkTarget(masterPath, displayText) {
    const withoutExtension = masterPath.replace(/\.md$/i, "");
    return `[[${withoutExtension}|${displayText}]]`;
  }
  replaceConceptSafely(text, concept, wikilink) {
    const escaped = this.escapeRegex(concept);
    const regex = new RegExp(escaped, "gi");
    const lines = text.split("\n");
    let inFrontmatter = false;
    let inFence = false;
    let fenceMarker = "";
    let count = 0;
    const output = lines.map((line, index) => {
      var _a;
      const trimmed = line.trim();
      if (index === 0 && trimmed === "---") {
        inFrontmatter = true;
        return line;
      }
      if (inFrontmatter && trimmed === "---") {
        inFrontmatter = false;
        return line;
      }
      if (inFrontmatter) {
        return line;
      }
      const fenceMatch = trimmed.match(/^(```+|~~~+)/);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (!inFence) {
          inFence = true;
          fenceMarker = marker;
        } else if (marker === fenceMarker) {
          inFence = false;
          fenceMarker = "";
        }
        return line;
      }
      if (inFence) {
        return line;
      }
      const protectedRanges = this.getProtectedRanges(line);
      let lastIndex = 0;
      let rebuilt = "";
      for (const match of line.matchAll(regex)) {
        const start = (_a = match.index) != null ? _a : 0;
        const end = start + match[0].length;
        if (protectedRanges.some(
          (range) => start >= range.start && end <= range.end
        )) {
          continue;
        }
        rebuilt += line.slice(
          lastIndex,
          start
        );
        const matchedText = match[0];
        const target = wikilink.replace(
          /\|[^|\]]+\]\]$/,
          `|${matchedText}]]`
        );
        rebuilt += target;
        lastIndex = end;
        count++;
      }
      if (lastIndex === 0) {
        return line;
      }
      rebuilt += line.slice(lastIndex);
      return rebuilt;
    });
    return {
      text: output.join("\n"),
      count
    };
  }
  getProtectedRanges(line) {
    var _a;
    const ranges = [];
    const patterns = [
      /\[\[[^\]]*?\]\]/g,
      /`[^`]*`/g,
      /\[[^\]]*?\]\([^)]+?\)/g
    ];
    for (const pattern of patterns) {
      for (const match of line.matchAll(pattern)) {
        const start = (_a = match.index) != null ? _a : 0;
        ranges.push({
          start,
          end: start + match[0].length
        });
      }
    }
    return ranges;
  }
  addHashtagIfMissing(text, hashtag) {
    if (!hashtag) {
      return {
        text,
        added: false
      };
    }
    const escaped = this.escapeRegex(hashtag);
    const existingTagRegex = new RegExp(
      `(^|\\n)[ \\t]*#${escaped}[ \\t]*(?=\\n|$)`,
      "gi"
    );
    const hadExistingTag = existingTagRegex.test(text);
    const cleanedText = text.replace(
      new RegExp(
        `(^|\\n)[ \\t]*#${escaped}[ \\t]*(?=\\n|$)`,
        "gi"
      ),
      "$1"
    ).replace(/\n{3,}/g, "\n\n");
    const tagLine = `#${hashtag}`;
    if (cleanedText.startsWith("---\n")) {
      const frontmatterEnd = cleanedText.indexOf("\n---", 4);
      if (frontmatterEnd !== -1) {
        const insertAt = frontmatterEnd + "\n---".length;
        const before = cleanedText.slice(0, insertAt);
        const after = cleanedText.slice(insertAt).replace(/^\n*/, "");
        return {
          text: `${before}

${tagLine}

` + after,
          added: !hadExistingTag
        };
      }
    }
    const cleanStart = cleanedText.replace(/^\n+/, "");
    return {
      text: `${tagLine}

` + cleanStart,
      added: !hadExistingTag
    };
  }
  async createOrUpdateMasterPage(concept, group, masterPath) {
    const folderPath = masterPath.substring(
      0,
      masterPath.lastIndexOf("/")
    );
    await this.ensureFolder(folderPath);
    const freshResults = await this.searchConcept(
      concept,
      group.folders
    );
    const sections = [];
    for (const result of freshResults) {
      if (result.file.path === masterPath || this.isMasterPage(result.file.path)) {
        continue;
      }
      const references = await this.ensureReferenceTargets(
        result.file,
        concept
      );
      const fileTarget = result.file.path.replace(
        /\.md$/i,
        ""
      );
      const sectionLines = [
        `### [[${fileTarget}|${result.file.basename}]] \u2014 ${result.occurrences} ${result.occurrences === 1 ? "occurrence" : "occurrences"}`
      ];
      if (references.length > 0) {
        for (const reference of references) {
          sectionLines.push(
            `- [[${reference.link}|${reference.label}]]`
          );
          if (reference.excerpt) {
            sectionLines.push(
              `  > ${reference.excerpt}`
            );
          }
        }
      }
      sections.push(
        sectionLines.join("\n")
      );
    }
    const content = `# ${concept}

## References

${sections.join("\n\n") || "_No references found._"}
`;
    const existing = this.app.vault.getAbstractFileByPath(
      masterPath
    );
    if (existing instanceof import_obsidian.TFile) {
      await this.app.vault.modify(
        existing,
        content
      );
      return "updated";
    }
    await this.app.vault.create(
      masterPath,
      content
    );
    return "created";
  }
  async ensureReferenceTargets(file, concept) {
    var _a;
    const original = await this.app.vault.read(file);
    const lines = original.split("\n");
    const escapedConcept = this.escapeRegex(concept);
    const conceptRegex = new RegExp(escapedConcept, "i");
    let inFrontmatter = false;
    let inFence = false;
    let fenceMarker = "";
    let changed = false;
    const references = [];
    const seenLinks = /* @__PURE__ */ new Set();
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const trimmed = line.trim();
      if (index === 0 && trimmed === "---") {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter && trimmed === "---") {
        inFrontmatter = false;
        continue;
      }
      if (inFrontmatter) {
        continue;
      }
      const fenceMatch = trimmed.match(/^(```+|~~~+)/);
      if (fenceMatch) {
        const marker = fenceMatch[1][0];
        if (!inFence) {
          inFence = true;
          fenceMarker = marker;
        } else if (marker === fenceMarker) {
          inFence = false;
          fenceMarker = "";
        }
        continue;
      }
      if (inFence || !conceptRegex.test(line)) {
        continue;
      }
      const headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*$/);
      if (headingMatch) {
        const heading = headingMatch[2].replace(/\s+#+\s*$/, "").trim();
        const target2 = `${file.path.replace(/\.md$/i, "")}#${heading}`;
        if (!seenLinks.has(target2)) {
          seenLinks.add(target2);
          references.push({
            label: heading,
            link: target2,
            excerpt: this.makeExcerpt(
              this.getParagraphText(
                lines,
                index
              )
            )
          });
        }
        continue;
      }
      if (this.isLikelyTableLine(line)) {
        const headingTarget = this.findNearestHeadingTarget(
          lines,
          index,
          file
        );
        if (headingTarget && !seenLinks.has(
          headingTarget.link
        )) {
          seenLinks.add(
            headingTarget.link
          );
          references.push({
            ...headingTarget,
            excerpt: this.makeExcerpt(
              this.getParagraphText(
                lines,
                index
              )
            )
          });
        }
        continue;
      }
      const existingIdMatch = line.match(
        /\s+\^([A-Za-z0-9-]+)\s*$/
      );
      let blockId = (_a = existingIdMatch == null ? void 0 : existingIdMatch[1]) != null ? _a : "";
      if (!blockId) {
        blockId = this.makeStableBlockId(
          file.path,
          line,
          index
        );
        lines[index] = `${line.replace(/\s+$/, "")} ^${blockId}`;
        changed = true;
      }
      const target = `${file.path.replace(/\.md$/i, "")}#^${blockId}`;
      if (!seenLinks.has(target)) {
        seenLinks.add(target);
        references.push({
          label: `Block ${references.length + 1}`,
          link: target,
          excerpt: this.makeExcerpt(
            this.getParagraphText(
              lines,
              index
            )
          )
        });
      }
    }
    if (changed) {
      await this.app.vault.modify(
        file,
        lines.join("\n")
      );
    }
    return references;
  }
  getParagraphText(lines, lineIndex) {
    let start = lineIndex;
    let end = lineIndex;
    while (start > 0 && lines[start - 1].trim() !== "" && !this.isStructuralBoundary(
      lines[start - 1]
    )) {
      start--;
    }
    while (end < lines.length - 1 && lines[end + 1].trim() !== "" && !this.isStructuralBoundary(
      lines[end + 1]
    )) {
      end++;
    }
    return lines.slice(start, end + 1).join(" ").replace(/\s+/g, " ").trim();
  }
  isStructuralBoundary(line) {
    const trimmed = line.trim();
    return /^#{1,6}\s+/.test(trimmed) || /^(```+|~~~+)/.test(trimmed) || this.isLikelyTableLine(line);
  }
  makeExcerpt(text, maxLength = 160) {
    const cleaned = text.replace(
      /\[\[[^|\]]+\|([^\]]+)\]\]/g,
      "$1"
    ).replace(
      /\[\[([^\]]+)\]\]/g,
      "$1"
    ).replace(
      /\[([^\]]+)\]\([^)]+\)/g,
      "$1"
    ).replace(
      /\s+\^[A-Za-z0-9-]+\s*$/g,
      ""
    ).replace(
      /[*_~`>#-]+/g,
      " "
    ).replace(/\s+/g, " ").trim();
    if (cleaned.length <= maxLength) {
      return cleaned;
    }
    return cleaned.slice(0, maxLength).trimEnd() + "\u2026";
  }
  findNearestHeadingTarget(lines, fromIndex, file) {
    for (let index = fromIndex - 1; index >= 0; index--) {
      const match = lines[index].match(
        /^(#{1,6})\s+(.+?)\s*$/
      );
      if (!match) {
        continue;
      }
      const heading = match[2].replace(/\s+#+\s*$/, "").trim();
      return {
        label: heading,
        link: `${file.path.replace(/\.md$/i, "")}#${heading}`
      };
    }
    return null;
  }
  isLikelyTableLine(line) {
    const trimmed = line.trim();
    return trimmed.startsWith("|") && trimmed.endsWith("|");
  }
  makeStableBlockId(filePath, line, lineIndex) {
    const source = `${filePath}|${line.trim()}|${lineIndex}`;
    let hash = 2166136261;
    for (let index = 0; index < source.length; index++) {
      hash ^= source.charCodeAt(index);
      hash = Math.imul(
        hash,
        16777619
      );
    }
    return "ci-" + (hash >>> 0).toString(36);
  }
  async ensureFolder(path) {
    if (!path) {
      return;
    }
    const parts = path.split("/");
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!this.app.vault.getAbstractFileByPath(
        current
      )) {
        await this.app.vault.createFolder(
          current
        );
      }
    }
  }
  normalizeHashtag(concept) {
    return concept.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  sanitizeFileName(concept) {
    const sanitized = concept.replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ").trim();
    return sanitized || "Untitled concept";
  }
  escapeRegex(value) {
    return value.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
  }
  countOccurrences(text, concept) {
    var _a, _b;
    const escapedConcept = this.escapeRegex(concept);
    const regex = new RegExp(
      escapedConcept,
      "gi"
    );
    return (_b = (_a = text.match(regex)) == null ? void 0 : _a.length) != null ? _b : 0;
  }
  onunload() {
    console.log("Concept Indexer unloaded");
  }
};
