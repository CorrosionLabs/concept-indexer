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
    useShort: "Use",
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
    updateMode: "Master update mode",
    expandMode: "Expand",
    synchronizeMode: "Synchronize",
    process: "Process concept",
    indexMode: "Index",
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
    crossReferences: "Cross references",
    maintenance: "Maintenance",
    analyzeChanges: "Analyze changes",
    changeAnalysis: "Change analysis",
    existing: "Existing",
    deleted: "Deleted",
    identifiers: "Identifiers",
    hashtags: "Hashtags",
    wikilinks: "Wikilinks",
    sharedReferences: "Shared references",
    protectedElements: "Protected elements",
    pluginCreatedElements: "Plugin-created elements",
    noChanges: "No registered changes found.",
    analysisFailed: "Could not analyze changes.",
    previewCleanup: "Preview cleanup",
    executeCleanup: "Execute cleanup",
    confirmCleanup: "Confirm cleanup",
    cleanupCompleted: "Cleanup completed",
    cleanupPartial: "Cleanup completed with conflicts",
    cleanupNoRemovable: "No removable elements found",
    selectMasterForCleanup: "Select a master page",
    cleanupPreview: "Cleanup preview",
    remove: "Remove",
    keepShared: "Keep shared",
    keepProtected: "Keep protected",
    conflict: "Conflict",
    cleanupConflicts: "Conflicts",
    crossReferencesTitle: "Cross references",
    selectCrossReferences: "Select master pages",
    selectAtLeastTwo: "Select at least two concepts.",
    generateCrossReferences: "Generate cross-reference index",
    documentsRelated: "Related documents",
    blocksRelated: "Related blocks",
    crossReferencesCreated: "Cross-reference index updated",
    noMasterPages: "No master pages found.",
    crossReferenceScopeMismatch: "Select master pages from the same scope.",
    searchCrossReferences: "Search matches",
    crossReferenceSearchFailed: "Could not search cross references.",
    noCrossReferenceMatches: "No matches found.",
    searchFirst: "Search for the concept before processing it.",
    nothingEnabled: "Enable at least one processing option.",
    cancel: "Cancel",
    confirm: "Process",
    confirmProcessing: "Confirm processing",
    masterPageName: "Master page name",
    masterPageNameDesc: "Name used to create or update the master page.",
    masterPageNameRequired: "Enter a name for the master page.",
    filesFound: "Files found",
    occurrencesFound: "Occurrences found",
    largeMatchWarning: "There are more than 1,000 matches. Processing may take a while.",
    processingFile: "Processing file",
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
    searchingFolder: "Searching: {folder}",
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
    masterFolderDesc: "Location where all master pages and indexes are stored, regardless of the search scope.",
    indexFilename: "Global index filename",
    indexFilenameDesc: "Filename used for the concept index.",
    ignoredFolders: "Ignored folders",
    ignoredFoldersDesc: "One vault-relative folder per line. Subfolders are ignored automatically.",
    blacklistedConcepts: "Blacklisted concepts",
    blacklistedConceptsDesc: "One excluded concept per line. Matching is case-insensitive.",
    documentation: "Documentation",
    openManual: "Open manual"
  },
  es: {
    title: "Indexador de conceptos",
    concept: "Concepto",
    search: "Buscar",
    useSelection: "Usar selecci\xF3n",
    useShort: "Usar",
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
    updateMode: "Modo de actualizaci\xF3n de maestras",
    expandMode: "Ampliar",
    synchronizeMode: "Sincronizar",
    process: "Procesar concepto",
    indexMode: "Indexar",
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
    crossReferences: "Referencias cruzadas",
    maintenance: "Mantenimiento",
    analyzeChanges: "Analizar cambios",
    changeAnalysis: "An\xE1lisis de cambios",
    existing: "Existente",
    deleted: "Eliminada",
    identifiers: "Identificadores",
    hashtags: "Hashtags",
    wikilinks: "Wikilinks",
    sharedReferences: "Referencias compartidas",
    protectedElements: "Elementos protegidos",
    pluginCreatedElements: "Elementos creados por el plugin",
    noChanges: "No se encontraron cambios registrados.",
    analysisFailed: "No se pudieron analizar los cambios.",
    previewCleanup: "Previsualizar limpieza",
    executeCleanup: "Ejecutar limpieza",
    confirmCleanup: "Confirmar limpieza",
    cleanupCompleted: "Limpieza completada",
    cleanupPartial: "Limpieza completada con conflictos",
    cleanupNoRemovable: "No se encontraron elementos eliminables",
    selectMasterForCleanup: "Seleccionar p\xE1gina maestra",
    cleanupPreview: "Vista previa de limpieza",
    remove: "Eliminar",
    keepShared: "Conservar compartido",
    keepProtected: "Conservar protegido",
    conflict: "Conflicto",
    cleanupConflicts: "Conflictos",
    crossReferencesTitle: "Referencias cruzadas",
    selectCrossReferences: "Seleccionar p\xE1ginas maestras",
    selectAtLeastTwo: "Selecciona al menos dos conceptos.",
    generateCrossReferences: "Generar \xEDndice de referencias cruzadas",
    documentsRelated: "Documentos relacionados",
    blocksRelated: "Bloques relacionados",
    crossReferencesCreated: "\xCDndice de referencias cruzadas actualizado",
    noMasterPages: "No se encontraron p\xE1ginas maestras.",
    crossReferenceScopeMismatch: "Selecciona p\xE1ginas maestras del mismo \xE1mbito.",
    searchCrossReferences: "Buscar coincidencias",
    crossReferenceSearchFailed: "No se pudieron buscar las referencias cruzadas.",
    noCrossReferenceMatches: "No se encontraron coincidencias.",
    searchFirst: "Busca el concepto antes de procesarlo.",
    nothingEnabled: "Activa al menos una opci\xF3n de procesamiento.",
    cancel: "Cancelar",
    confirm: "Procesar",
    confirmProcessing: "Confirmar procesamiento",
    masterPageName: "Nombre de la p\xE1gina maestra",
    masterPageNameDesc: "Nombre usado para crear o actualizar la p\xE1gina maestra.",
    masterPageNameRequired: "Indica un nombre para la p\xE1gina maestra.",
    filesFound: "Archivos encontrados",
    occurrencesFound: "Apariciones encontradas",
    largeMatchWarning: "Hay m\xE1s de 1.000 coincidencias. El procesamiento puede tardar.",
    processingFile: "Procesando archivo",
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
    searchingFolder: "Buscando: {folder}",
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
    masterFolderDesc: "Ubicaci\xF3n donde se guardan todas las p\xE1ginas maestras y los \xEDndices, independientemente del \xE1mbito de b\xFAsqueda.",
    indexFilename: "Nombre del \xEDndice global",
    indexFilenameDesc: "Nombre de archivo usado para el \xEDndice de conceptos.",
    ignoredFolders: "Carpetas ignoradas",
    ignoredFoldersDesc: "Una carpeta relativa al vault por l\xEDnea. Sus subcarpetas se ignoran autom\xE1ticamente.",
    blacklistedConcepts: "Conceptos excluidos",
    blacklistedConceptsDesc: "Un concepto excluido por l\xEDnea. La comparaci\xF3n no distingue may\xFAsculas y min\xFAsculas.",
    documentation: "Documentaci\xF3n",
    openManual: "Abrir manual"
  },
  fr: {
    title: "Indexeur de concepts",
    concept: "Concept",
    search: "Rechercher",
    useSelection: "Utiliser la s\xE9lection",
    useShort: "Utiliser",
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
    createMaster: "Cr\xE9er/mettre \xE0 jour la page ma\xEEtresse",
    createIndex: "Cr\xE9er/mettre \xE0 jour l\u2019index global des concepts",
    addHashtag: "Ajouter un hashtag",
    updateMode: "Mode de mise \xE0 jour des pages ma\xEEtresses",
    expandMode: "\xC9tendre",
    synchronizeMode: "Synchroniser",
    process: "Traiter le concept",
    indexMode: "Indexer",
    enterConcept: "Saisissez un concept.",
    selectFolder: "S\xE9lectionnez au moins un dossier.",
    noSelection: "S\xE9lectionnez d\u2019abord du texte dans une note ouverte.",
    ready: "S\xE9lectionnez une port\xE9e et recherchez un concept.",
    noMatches: "Aucune correspondance trouv\xE9e.",
    notes: "Notes",
    occurrences: "Occurrences",
    entireVaultGroup: "Tout le vault",
    openCommand: "Ouvrir Indexeur de concepts",
    openMaster: "Ouvrir la page ma\xEEtresse",
    openIndex: "Ouvrir l\u2019index global",
    crossReferences: "R\xE9f\xE9rences crois\xE9es",
    maintenance: "Maintenance",
    analyzeChanges: "Analyser les changements",
    changeAnalysis: "Analyse des changements",
    existing: "Existante",
    deleted: "Supprim\xE9e",
    identifiers: "Identifiants",
    hashtags: "Hashtags",
    wikilinks: "Wikilinks",
    sharedReferences: "R\xE9f\xE9rences partag\xE9es",
    protectedElements: "\xC9l\xE9ments prot\xE9g\xE9s",
    pluginCreatedElements: "\xC9l\xE9ments cr\xE9\xE9s par le plugin",
    noChanges: "Aucun changement enregistr\xE9.",
    analysisFailed: "Impossible d\u2019analyser les changements.",
    previewCleanup: "Pr\xE9visualiser le nettoyage",
    executeCleanup: "Ex\xE9cuter le nettoyage",
    confirmCleanup: "Confirmer le nettoyage",
    cleanupCompleted: "Nettoyage termin\xE9",
    cleanupPartial: "Nettoyage termin\xE9 avec des conflits",
    cleanupNoRemovable: "Aucun \xE9l\xE9ment supprimable trouv\xE9",
    selectMasterForCleanup: "S\xE9lectionner une page ma\xEEtresse",
    cleanupPreview: "Aper\xE7u du nettoyage",
    remove: "Supprimer",
    keepShared: "Conserver partag\xE9",
    keepProtected: "Conserver prot\xE9g\xE9",
    conflict: "Conflit",
    cleanupConflicts: "Conflits",
    crossReferencesTitle: "R\xE9f\xE9rences crois\xE9es",
    selectCrossReferences: "S\xE9lectionner les pages ma\xEEtresses",
    selectAtLeastTwo: "S\xE9lectionnez au moins deux concepts.",
    generateCrossReferences: "G\xE9n\xE9rer l\u2019index des r\xE9f\xE9rences crois\xE9es",
    documentsRelated: "Documents associ\xE9s",
    blocksRelated: "Blocs associ\xE9s",
    crossReferencesCreated: "Index des r\xE9f\xE9rences crois\xE9es mis \xE0 jour",
    noMasterPages: "Aucune page ma\xEEtresse trouv\xE9e.",
    crossReferenceScopeMismatch: "S\xE9lectionnez des pages ma\xEEtresses de la m\xEAme port\xE9e.",
    searchCrossReferences: "Rechercher les correspondances",
    crossReferenceSearchFailed: "Impossible de rechercher les r\xE9f\xE9rences crois\xE9es.",
    noCrossReferenceMatches: "Aucune correspondance trouv\xE9e.",
    searchFirst: "Recherchez le concept avant de le traiter.",
    nothingEnabled: "Activez au moins une option de traitement.",
    cancel: "Annuler",
    confirm: "Traiter",
    confirmProcessing: "Confirmer le traitement",
    masterPageName: "Nom de la page ma\xEEtresse",
    masterPageNameDesc: "Nom utilis\xE9 pour cr\xE9er ou mettre \xE0 jour la page ma\xEEtresse.",
    masterPageNameRequired: "Saisissez un nom pour la page ma\xEEtresse.",
    filesFound: "Fichiers trouv\xE9s",
    occurrencesFound: "Occurrences trouv\xE9es",
    largeMatchWarning: "Plus de 1 000 correspondances ont \xE9t\xE9 trouv\xE9es. Le traitement peut prendre un certain temps.",
    processingFile: "Fichier en cours de traitement",
    processingComplete: "Traitement termin\xE9",
    filesModified: "Fichiers modifi\xE9s",
    wikilinksCreated: "Wikilinks cr\xE9\xE9s",
    hashtagsAdded: "Hashtags ajout\xE9s",
    masterPagesCreated: "Pages ma\xEEtresses cr\xE9\xE9es",
    masterPagesUpdated: "Pages ma\xEEtresses mises \xE0 jour",
    globalIndexesCreated: "Index globaux cr\xE9\xE9s",
    globalIndexesUpdated: "Index globaux mis \xE0 jour",
    processingFailed: "Le traitement a \xE9chou\xE9. Consultez la console d\xE9veloppeur.",
    starting: "D\xE9marrage...",
    processingFiles: "Traitement des fichiers...",
    updatingMasters: "Mise \xE0 jour des pages ma\xEEtresses...",
    updatingIndex: "Mise \xE0 jour de l\u2019index global...",
    searching: "Recherche...",
    searchingEntireVault: "Recherche dans tout le vault...",
    searchingSelectedScope: "Recherche dans la port\xE9e s\xE9lectionn\xE9e...",
    searchingConcept: "Recherche du concept...",
    searchingFolder: "Recherche : {folder}",
    processingConcept: "Traitement du concept...",
    processingButton: "Traitement...",
    exampleConcept: "Exemple : Corrosion Labs",
    collapseExpandScope: "R\xE9duire / d\xE9velopper la port\xE9e",
    linksShort: "Liens",
    masterShort: "Ma\xEEtresse",
    hashtagShort: "Hashtag",
    multipleMasters: "Plusieurs pages ma\xEEtresses s\xE9par\xE9es existent. Ouvrez-les depuis les groupes de r\xE9sultats ou passez en mode Ensemble.",
    masterMissing: "La page ma\xEEtresse n\u2019existe pas encore.",
    multipleIndexes: "Plusieurs index s\xE9par\xE9s existent. Ouvrez le Concept Index.md souhait\xE9 depuis son dossier.",
    indexMissing: "L\u2019index global n\u2019existe pas encore.",
    settingsTitle: "Indexeur de concepts",
    language: "Langue",
    languageDesc: "Langue de l\u2019interface du panneau et des r\xE9glages du plugin.",
    masterFolder: "Dossier des pages ma\xEEtresses",
    masterFolderDesc: "Emplacement o\xF9 sont stock\xE9s tous les index et toutes les pages ma\xEEtresses, quelle que soit la port\xE9e de recherche.",
    indexFilename: "Nom du fichier d\u2019index global",
    indexFilenameDesc: "Nom de fichier utilis\xE9 pour l\u2019index des concepts.",
    ignoredFolders: "Dossiers ignor\xE9s",
    ignoredFoldersDesc: "Un dossier relatif au vault par ligne. Les sous-dossiers sont ignor\xE9s automatiquement.",
    blacklistedConcepts: "Concepts exclus",
    blacklistedConceptsDesc: "Un concept exclu par ligne. La comparaison ne tient pas compte de la casse.",
    documentation: "Documentation",
    openManual: "Ouvrir le manuel"
  },
  "pt-BR": {
    title: "Indexador de Conceitos",
    concept: "Conceito",
    search: "Buscar",
    useSelection: "Usar sele\xE7\xE3o",
    useShort: "Usar",
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
    updateMode: "Modo de atualiza\xE7\xE3o das p\xE1ginas mestras",
    expandMode: "Ampliar",
    synchronizeMode: "Sincronizar",
    process: "Processar conceito",
    indexMode: "Indexar",
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
    crossReferences: "Refer\xEAncias cruzadas",
    maintenance: "Manuten\xE7\xE3o",
    analyzeChanges: "Analisar altera\xE7\xF5es",
    changeAnalysis: "An\xE1lise de altera\xE7\xF5es",
    existing: "Existente",
    deleted: "Eliminada",
    identifiers: "Identificadores",
    hashtags: "Hashtags",
    wikilinks: "Wikilinks",
    sharedReferences: "Refer\xEAncias compartilhadas",
    protectedElements: "Elementos protegidos",
    pluginCreatedElements: "Elementos criados pelo plugin",
    noChanges: "N\xE3o foram encontradas altera\xE7\xF5es registradas.",
    analysisFailed: "N\xE3o foi poss\xEDvel analisar as altera\xE7\xF5es.",
    previewCleanup: "Pr\xE9-visualizar limpeza",
    executeCleanup: "Executar limpeza",
    confirmCleanup: "Confirmar limpeza",
    cleanupCompleted: "Limpeza conclu\xEDda",
    cleanupPartial: "Limpeza conclu\xEDda com conflitos",
    cleanupNoRemovable: "Nenhum elemento remov\xEDvel encontrado",
    selectMasterForCleanup: "Selecionar p\xE1gina mestra",
    cleanupPreview: "Pr\xE9-visualiza\xE7\xE3o da limpeza",
    remove: "Remover",
    keepShared: "Manter compartilhado",
    keepProtected: "Manter protegido",
    conflict: "Conflito",
    cleanupConflicts: "Conflitos",
    crossReferencesTitle: "Refer\xEAncias cruzadas",
    selectCrossReferences: "Selecionar p\xE1ginas mestras",
    selectAtLeastTwo: "Selecione pelo menos dois conceitos.",
    generateCrossReferences: "Gerar \xEDndice de refer\xEAncias cruzadas",
    documentsRelated: "Documentos relacionados",
    blocksRelated: "Blocos relacionados",
    crossReferencesCreated: "\xCDndice de refer\xEAncias cruzadas atualizado",
    noMasterPages: "Nenhuma p\xE1gina mestra encontrada.",
    crossReferenceScopeMismatch: "Selecione p\xE1ginas mestras do mesmo escopo.",
    searchCrossReferences: "Buscar ocorr\xEAncias",
    crossReferenceSearchFailed: "N\xE3o foi poss\xEDvel buscar as refer\xEAncias cruzadas.",
    noCrossReferenceMatches: "Nenhuma ocorr\xEAncia encontrada.",
    searchFirst: "Pesquise o conceito antes de process\xE1-lo.",
    nothingEnabled: "Ative pelo menos uma op\xE7\xE3o de processamento.",
    cancel: "Cancelar",
    confirm: "Processar",
    confirmProcessing: "Confirmar processamento",
    masterPageName: "Nome da p\xE1gina mestra",
    masterPageNameDesc: "Nome usado para criar ou atualizar a p\xE1gina mestra.",
    masterPageNameRequired: "Insira um nome para a p\xE1gina mestra.",
    filesFound: "Arquivos encontrados",
    occurrencesFound: "Ocorr\xEAncias encontradas",
    largeMatchWarning: "H\xE1 mais de 1.000 ocorr\xEAncias. O processamento pode demorar.",
    processingFile: "Processando arquivo",
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
    searchingFolder: "Buscando: {folder}",
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
    masterFolderDesc: "Local onde todas as p\xE1ginas mestras e todos os \xEDndices s\xE3o armazenados, independentemente do escopo da pesquisa.",
    indexFilename: "Nome do arquivo do \xEDndice global",
    indexFilenameDesc: "Nome do arquivo usado para o \xEDndice de conceitos.",
    ignoredFolders: "Pastas ignoradas",
    ignoredFoldersDesc: "Uma pasta relativa ao vault por linha. As subpastas tamb\xE9m s\xE3o ignoradas automaticamente.",
    blacklistedConcepts: "Conceitos exclu\xEDdos",
    blacklistedConceptsDesc: "Um conceito exclu\xEDdo por linha. A compara\xE7\xE3o n\xE3o diferencia mai\xFAsculas e min\xFAsculas.",
    documentation: "Documenta\xE7\xE3o",
    openManual: "Abrir manual"
  },
  de: {
    title: "Konzept-Indexer",
    concept: "Konzept",
    search: "Suchen",
    useSelection: "Auswahl verwenden",
    useShort: "Nutzen",
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
    updateMode: "Aktualisierungsmodus der Masterseiten",
    expandMode: "Erweitern",
    synchronizeMode: "Synchronisieren",
    process: "Konzept verarbeiten",
    indexMode: "Indexieren",
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
    crossReferences: "Querverweise",
    maintenance: "Wartung",
    analyzeChanges: "\xC4nderungen analysieren",
    changeAnalysis: "\xC4nderungsanalyse",
    existing: "Vorhanden",
    deleted: "Gel\xF6scht",
    identifiers: "Bezeichner",
    hashtags: "Hashtags",
    wikilinks: "Wikilinks",
    sharedReferences: "Gemeinsame Referenzen",
    protectedElements: "Gesch\xFCtzte Elemente",
    pluginCreatedElements: "Vom Plugin erstellte Elemente",
    noChanges: "Keine registrierten \xC4nderungen gefunden.",
    analysisFailed: "\xC4nderungen konnten nicht analysiert werden.",
    previewCleanup: "Bereinigung anzeigen",
    executeCleanup: "Bereinigung ausf\xFChren",
    confirmCleanup: "Bereinigung best\xE4tigen",
    cleanupCompleted: "Bereinigung abgeschlossen",
    cleanupPartial: "Bereinigung mit Konflikten abgeschlossen",
    cleanupNoRemovable: "Keine entfernbaren Elemente gefunden",
    selectMasterForCleanup: "Masterseite ausw\xE4hlen",
    cleanupPreview: "Bereinigungsvorschau",
    remove: "Entfernen",
    keepShared: "Gemeinsam behalten",
    keepProtected: "Gesch\xFCtzt behalten",
    conflict: "Konflikt",
    cleanupConflicts: "Konflikte",
    crossReferencesTitle: "Querverweise",
    selectCrossReferences: "Masterseiten ausw\xE4hlen",
    selectAtLeastTwo: "W\xE4hlen Sie mindestens zwei Konzepte aus.",
    generateCrossReferences: "Querverweisindex erzeugen",
    documentsRelated: "Verwandte Dokumente",
    blocksRelated: "Verwandte Bl\xF6cke",
    crossReferencesCreated: "Querverweisindex aktualisiert",
    noMasterPages: "Keine Masterseiten gefunden.",
    crossReferenceScopeMismatch: "W\xE4hlen Sie Masterseiten aus demselben Bereich.",
    searchCrossReferences: "\xDCbereinstimmungen suchen",
    crossReferenceSearchFailed: "Querverweise konnten nicht gesucht werden.",
    noCrossReferenceMatches: "Keine \xDCbereinstimmungen gefunden.",
    searchFirst: "Suchen Sie zuerst nach dem Konzept, bevor Sie es verarbeiten.",
    nothingEnabled: "Aktivieren Sie mindestens eine Verarbeitungsoption.",
    cancel: "Abbrechen",
    confirm: "Verarbeiten",
    confirmProcessing: "Verarbeitung best\xE4tigen",
    masterPageName: "Name der Masterseite",
    masterPageNameDesc: "Name zum Erstellen oder Aktualisieren der Masterseite.",
    masterPageNameRequired: "Geben Sie einen Namen f\xFCr die Masterseite ein.",
    filesFound: "Gefundene Dateien",
    occurrencesFound: "Gefundene Vorkommen",
    largeMatchWarning: "Es gibt mehr als 1.000 Treffer. Die Verarbeitung kann einige Zeit dauern.",
    processingFile: "Datei wird verarbeitet",
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
    searchingFolder: "Suche: {folder}",
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
    masterFolderDesc: "Speicherort f\xFCr alle Masterseiten und Indizes, unabh\xE4ngig vom Suchbereich.",
    indexFilename: "Dateiname des globalen Index",
    indexFilenameDesc: "Dateiname f\xFCr den Konzeptindex.",
    ignoredFolders: "Ignorierte Ordner",
    ignoredFoldersDesc: "Ein Vault-relativer Ordner pro Zeile. Unterordner werden automatisch ebenfalls ignoriert.",
    blacklistedConcepts: "Ausgeschlossene Konzepte",
    blacklistedConceptsDesc: "Ein ausgeschlossenes Konzept pro Zeile. Gro\xDF- und Kleinschreibung wird ignoriert.",
    documentation: "Dokumentation",
    openManual: "Handbuch \xF6ffnen"
  },
  pl: {
    title: "Indeksator poj\u0119\u0107",
    concept: "Poj\u0119cie",
    search: "Szukaj",
    useSelection: "U\u017Cyj zaznaczenia",
    useShort: "U\u017Cyj",
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
    updateMode: "Tryb aktualizacji stron g\u0142\xF3wnych",
    expandMode: "Rozszerz",
    synchronizeMode: "Synchronizuj",
    process: "Przetw\xF3rz poj\u0119cie",
    indexMode: "Indeksuj",
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
    crossReferences: "Odno\u015Bniki krzy\u017Cowe",
    maintenance: "Konserwacja",
    analyzeChanges: "Analizuj zmiany",
    changeAnalysis: "Analiza zmian",
    existing: "Istniej\u0105ca",
    deleted: "Usuni\u0119ta",
    identifiers: "Identyfikatory",
    hashtags: "Hashtagi",
    wikilinks: "Wikilinki",
    sharedReferences: "Wsp\xF3\u0142dzielone odwo\u0142ania",
    protectedElements: "Chronione elementy",
    pluginCreatedElements: "Elementy utworzone przez wtyczk\u0119",
    noChanges: "Nie znaleziono zarejestrowanych zmian.",
    analysisFailed: "Nie mo\u017Cna przeanalizowa\u0107 zmian.",
    previewCleanup: "Podgl\u0105d czyszczenia",
    executeCleanup: "Wykonaj czyszczenie",
    confirmCleanup: "Potwierd\u017A czyszczenie",
    cleanupCompleted: "Czyszczenie zako\u0144czone",
    cleanupPartial: "Czyszczenie zako\u0144czone z konfliktami",
    cleanupNoRemovable: "Nie znaleziono element\xF3w do usuni\u0119cia",
    selectMasterForCleanup: "Wybierz stron\u0119 g\u0142\xF3wn\u0105",
    cleanupPreview: "Podgl\u0105d czyszczenia",
    remove: "Usu\u0144",
    keepShared: "Zachowaj wsp\xF3\u0142dzielone",
    keepProtected: "Zachowaj chronione",
    conflict: "Konflikt",
    cleanupConflicts: "Konflikty",
    crossReferencesTitle: "Odno\u015Bniki krzy\u017Cowe",
    selectCrossReferences: "Wybierz strony g\u0142\xF3wne",
    selectAtLeastTwo: "Wybierz co najmniej dwa poj\u0119cia.",
    generateCrossReferences: "Utw\xF3rz indeks odno\u015Bnik\xF3w krzy\u017Cowych",
    documentsRelated: "Powi\u0105zane dokumenty",
    blocksRelated: "Powi\u0105zane bloki",
    crossReferencesCreated: "Indeks odno\u015Bnik\xF3w krzy\u017Cowych zaktualizowany",
    noMasterPages: "Nie znaleziono stron g\u0142\xF3wnych.",
    crossReferenceScopeMismatch: "Wybierz strony g\u0142\xF3wne z tego samego zakresu.",
    searchCrossReferences: "Wyszukaj dopasowania",
    crossReferenceSearchFailed: "Nie mo\u017Cna wyszuka\u0107 odno\u015Bnik\xF3w krzy\u017Cowych.",
    noCrossReferenceMatches: "Nie znaleziono dopasowa\u0144.",
    searchFirst: "Najpierw wyszukaj poj\u0119cie, zanim je przetworzysz.",
    nothingEnabled: "W\u0142\u0105cz co najmniej jedn\u0105 opcj\u0119 przetwarzania.",
    cancel: "Anuluj",
    confirm: "Przetw\xF3rz",
    confirmProcessing: "Potwierd\u017A przetwarzanie",
    masterPageName: "Nazwa strony g\u0142\xF3wnej",
    masterPageNameDesc: "Nazwa u\u017Cywana do utworzenia lub aktualizacji strony g\u0142\xF3wnej.",
    masterPageNameRequired: "Wprowad\u017A nazw\u0119 strony g\u0142\xF3wnej.",
    filesFound: "Znalezione pliki",
    occurrencesFound: "Znalezione wyst\u0105pienia",
    largeMatchWarning: "Znaleziono ponad 1 000 dopasowa\u0144. Przetwarzanie mo\u017Ce potrwa\u0107 d\u0142u\u017Cej.",
    processingFile: "Przetwarzany plik",
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
    searchingFolder: "Wyszukiwanie: {folder}",
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
    masterFolderDesc: "Lokalizacja, w kt\xF3rej przechowywane s\u0105 wszystkie strony g\u0142\xF3wne i indeksy, niezale\u017Cnie od zakresu wyszukiwania.",
    indexFilename: "Nazwa pliku globalnego indeksu",
    indexFilenameDesc: "Nazwa pliku u\u017Cywanego jako indeks poj\u0119\u0107.",
    ignoredFolders: "Ignorowane foldery",
    ignoredFoldersDesc: "Jeden folder wzgl\u0119dny wzgl\u0119dem vault na lini\u0119. Podfoldery s\u0105 ignorowane automatycznie.",
    blacklistedConcepts: "Wykluczone poj\u0119cia",
    blacklistedConceptsDesc: "Jedno wykluczone poj\u0119cie w wierszu. Wielko\u015B\u0107 liter nie ma znaczenia.",
    documentation: "Dokumentacja",
    openManual: "Otw\xF3rz instrukcj\u0119"
  },
  ja: {
    title: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30AF\u30B5\u30FC",
    concept: "\u30B3\u30F3\u30BB\u30D7\u30C8",
    search: "\u691C\u7D22",
    useSelection: "\u9078\u629E\u7BC4\u56F2\u3092\u4F7F\u7528",
    useShort: "\u4F7F\u7528",
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
    updateMode: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u306E\u66F4\u65B0\u30E2\u30FC\u30C9",
    expandMode: "\u62E1\u5F35",
    synchronizeMode: "\u540C\u671F",
    process: "\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u51E6\u7406",
    indexMode: "\u7D22\u5F15",
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
    crossReferences: "\u76F8\u4E92\u53C2\u7167",
    maintenance: "\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9",
    analyzeChanges: "\u5909\u66F4\u3092\u5206\u6790",
    changeAnalysis: "\u5909\u66F4\u5206\u6790",
    existing: "\u5B58\u5728",
    deleted: "\u524A\u9664\u6E08\u307F",
    identifiers: "\u8B58\u5225\u5B50",
    hashtags: "\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0",
    wikilinks: "Wikilink",
    sharedReferences: "\u5171\u6709\u53C2\u7167",
    protectedElements: "\u4FDD\u8B77\u3055\u308C\u305F\u8981\u7D20",
    pluginCreatedElements: "\u30D7\u30E9\u30B0\u30A4\u30F3\u4F5C\u6210\u8981\u7D20",
    noChanges: "\u767B\u9332\u3055\u308C\u305F\u5909\u66F4\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
    analysisFailed: "\u5909\u66F4\u3092\u5206\u6790\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    previewCleanup: "\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u3092\u30D7\u30EC\u30D3\u30E5\u30FC",
    executeCleanup: "\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u3092\u5B9F\u884C",
    confirmCleanup: "\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u3092\u78BA\u8A8D",
    cleanupCompleted: "\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u5B8C\u4E86",
    cleanupPartial: "\u7AF6\u5408\u3042\u308A\u3067\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u5B8C\u4E86",
    cleanupNoRemovable: "\u524A\u9664\u53EF\u80FD\u306A\u8981\u7D20\u304C\u3042\u308A\u307E\u305B\u3093",
    selectMasterForCleanup: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u9078\u629E",
    cleanupPreview: "\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",
    remove: "\u524A\u9664",
    keepShared: "\u5171\u6709\u3092\u4FDD\u6301",
    keepProtected: "\u4FDD\u8B77\u3092\u4FDD\u6301",
    conflict: "\u7AF6\u5408",
    cleanupConflicts: "\u7AF6\u5408",
    crossReferencesTitle: "\u76F8\u4E92\u53C2\u7167",
    selectCrossReferences: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u9078\u629E",
    selectAtLeastTwo: "2\u3064\u4EE5\u4E0A\u306E\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    generateCrossReferences: "\u76F8\u4E92\u53C2\u7167\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u751F\u6210",
    documentsRelated: "\u95A2\u9023\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
    blocksRelated: "\u95A2\u9023\u30D6\u30ED\u30C3\u30AF",
    crossReferencesCreated: "\u76F8\u4E92\u53C2\u7167\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F",
    noMasterPages: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",
    crossReferenceScopeMismatch: "\u540C\u3058\u5BFE\u8C61\u7BC4\u56F2\u306E\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    searchCrossReferences: "\u4E00\u81F4\u3092\u691C\u7D22",
    crossReferenceSearchFailed: "\u76F8\u4E92\u53C2\u7167\u3092\u691C\u7D22\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    noCrossReferenceMatches: "\u4E00\u81F4\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",
    searchFirst: "\u51E6\u7406\u3059\u308B\u524D\u306B\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    nothingEnabled: "\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u51E6\u7406\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    confirm: "\u51E6\u7406",
    confirmProcessing: "\u51E6\u7406\u3092\u78BA\u8A8D",
    masterPageName: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u540D",
    masterPageNameDesc: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u306E\u4F5C\u6210\u307E\u305F\u306F\u66F4\u65B0\u306B\u4F7F\u7528\u3059\u308B\u540D\u524D\u3067\u3059\u3002",
    masterPageNameRequired: "\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    filesFound: "\u898B\u3064\u304B\u3063\u305F\u30D5\u30A1\u30A4\u30EB",
    occurrencesFound: "\u898B\u3064\u304B\u3063\u305F\u51FA\u73FE\u7B87\u6240",
    largeMatchWarning: "1,000\u4EF6\u3092\u8D85\u3048\u308B\u4E00\u81F4\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F\u3002\u51E6\u7406\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
    processingFile: "\u51E6\u7406\u4E2D\u306E\u30D5\u30A1\u30A4\u30EB",
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
    searchingFolder: "\u691C\u7D22\u4E2D: {folder}",
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
    masterFolderDesc: "\u691C\u7D22\u7BC4\u56F2\u306B\u95A2\u4FC2\u306A\u304F\u3001\u3059\u3079\u3066\u306E\u30DE\u30B9\u30BF\u30FC\u30DA\u30FC\u30B8\u3068\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u6240\u3067\u3059\u3002",
    indexFilename: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u30D5\u30A1\u30A4\u30EB\u540D",
    indexFilenameDesc: "\u30B3\u30F3\u30BB\u30D7\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u540D\u3067\u3059\u3002",
    ignoredFolders: "\u7121\u8996\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u30FC",
    ignoredFoldersDesc: "Vault \u76F8\u5BFE\u30D1\u30B9\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u30921\u884C\u306B1\u3064\u5165\u529B\u3057\u307E\u3059\u3002\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u3082\u81EA\u52D5\u7684\u306B\u7121\u8996\u3055\u308C\u307E\u3059\u3002",
    blacklistedConcepts: "\u9664\u5916\u3059\u308B\u30B3\u30F3\u30BB\u30D7\u30C8",
    blacklistedConceptsDesc: "\u9664\u5916\u3059\u308B\u30B3\u30F3\u30BB\u30D7\u30C8\u30921\u884C\u306B1\u3064\u5165\u529B\u3057\u307E\u3059\u3002\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3057\u307E\u305B\u3093\u3002",
    documentation: "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
    openManual: "\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u958B\u304F"
  },
  "zh-CN": {
    title: "\u6982\u5FF5\u7D22\u5F15\u5668",
    concept: "\u6982\u5FF5",
    search: "\u641C\u7D22",
    useSelection: "\u4F7F\u7528\u6240\u9009\u5185\u5BB9",
    useShort: "\u4F7F\u7528",
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
    updateMode: "\u4E3B\u9875\u9762\u66F4\u65B0\u6A21\u5F0F",
    expandMode: "\u6269\u5C55",
    synchronizeMode: "\u540C\u6B65",
    process: "\u5904\u7406\u6982\u5FF5",
    indexMode: "\u7D22\u5F15",
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
    crossReferences: "\u4EA4\u53C9\u5F15\u7528",
    maintenance: "\u7EF4\u62A4",
    analyzeChanges: "\u5206\u6790\u66F4\u6539",
    changeAnalysis: "\u66F4\u6539\u5206\u6790",
    existing: "\u5B58\u5728",
    deleted: "\u5DF2\u5220\u9664",
    identifiers: "\u6807\u8BC6\u7B26",
    hashtags: "\u6807\u7B7E",
    wikilinks: "Wikilink",
    sharedReferences: "\u5171\u4EAB\u5F15\u7528",
    protectedElements: "\u53D7\u4FDD\u62A4\u5143\u7D20",
    pluginCreatedElements: "\u63D2\u4EF6\u521B\u5EFA\u7684\u5143\u7D20",
    noChanges: "\u672A\u627E\u5230\u5DF2\u767B\u8BB0\u7684\u66F4\u6539\u3002",
    analysisFailed: "\u65E0\u6CD5\u5206\u6790\u66F4\u6539\u3002",
    previewCleanup: "\u9884\u89C8\u6E05\u7406",
    executeCleanup: "\u6267\u884C\u6E05\u7406",
    confirmCleanup: "\u786E\u8BA4\u6E05\u7406",
    cleanupCompleted: "\u6E05\u7406\u5B8C\u6210",
    cleanupPartial: "\u6E05\u7406\u5B8C\u6210\uFF0C\u4F46\u5B58\u5728\u51B2\u7A81",
    cleanupNoRemovable: "\u672A\u627E\u5230\u53EF\u5220\u9664\u7684\u5143\u7D20",
    selectMasterForCleanup: "\u9009\u62E9\u4E3B\u9875\u9762",
    cleanupPreview: "\u6E05\u7406\u9884\u89C8",
    remove: "\u5220\u9664",
    keepShared: "\u4FDD\u7559\u5171\u4EAB\u9879",
    keepProtected: "\u4FDD\u7559\u53D7\u4FDD\u62A4\u9879",
    conflict: "\u51B2\u7A81",
    cleanupConflicts: "\u51B2\u7A81",
    crossReferencesTitle: "\u4EA4\u53C9\u5F15\u7528",
    selectCrossReferences: "\u9009\u62E9\u4E3B\u9875\u9762",
    selectAtLeastTwo: "\u8BF7\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u6982\u5FF5\u3002",
    generateCrossReferences: "\u751F\u6210\u4EA4\u53C9\u5F15\u7528\u7D22\u5F15",
    documentsRelated: "\u76F8\u5173\u6587\u6863",
    blocksRelated: "\u76F8\u5173\u5757",
    crossReferencesCreated: "\u4EA4\u53C9\u5F15\u7528\u7D22\u5F15\u5DF2\u66F4\u65B0",
    noMasterPages: "\u672A\u627E\u5230\u4E3B\u9875\u9762\u3002",
    crossReferenceScopeMismatch: "\u8BF7\u9009\u62E9\u540C\u4E00\u8303\u56F4\u5185\u7684\u4E3B\u9875\u9762\u3002",
    searchCrossReferences: "\u641C\u7D22\u5339\u914D\u9879",
    crossReferenceSearchFailed: "\u65E0\u6CD5\u641C\u7D22\u4EA4\u53C9\u5F15\u7528\u3002",
    noCrossReferenceMatches: "\u672A\u627E\u5230\u5339\u914D\u9879\u3002",
    searchFirst: "\u8BF7\u5148\u641C\u7D22\u6982\u5FF5\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u5904\u7406\u3002",
    nothingEnabled: "\u8BF7\u81F3\u5C11\u542F\u7528\u4E00\u4E2A\u5904\u7406\u9009\u9879\u3002",
    cancel: "\u53D6\u6D88",
    confirm: "\u5904\u7406",
    confirmProcessing: "\u786E\u8BA4\u5904\u7406",
    masterPageName: "\u4E3B\u9875\u9762\u540D\u79F0",
    masterPageNameDesc: "\u7528\u4E8E\u521B\u5EFA\u6216\u66F4\u65B0\u4E3B\u9875\u9762\u7684\u540D\u79F0\u3002",
    masterPageNameRequired: "\u8BF7\u8F93\u5165\u4E3B\u9875\u9762\u540D\u79F0\u3002",
    filesFound: "\u627E\u5230\u7684\u6587\u4EF6",
    occurrencesFound: "\u627E\u5230\u7684\u51FA\u73B0\u6B21\u6570",
    largeMatchWarning: "\u5339\u914D\u6570\u91CF\u8D85\u8FC7 1,000 \u4E2A\uFF0C\u5904\u7406\u53EF\u80FD\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\u3002",
    processingFile: "\u6B63\u5728\u5904\u7406\u7684\u6587\u4EF6",
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
    searchingFolder: "\u6B63\u5728\u641C\u7D22\uFF1A{folder}",
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
    masterFolderDesc: "\u7528\u4E8E\u4FDD\u5B58\u6240\u6709\u4E3B\u9875\u9762\u548C\u7D22\u5F15\u7684\u4F4D\u7F6E\uFF0C\u4E0E\u641C\u7D22\u8303\u56F4\u65E0\u5173\u3002",
    indexFilename: "\u5168\u5C40\u7D22\u5F15\u6587\u4EF6\u540D",
    indexFilenameDesc: "\u7528\u4E8E\u6982\u5FF5\u7D22\u5F15\u7684\u6587\u4EF6\u540D\u3002",
    ignoredFolders: "\u5FFD\u7565\u7684\u6587\u4EF6\u5939",
    ignoredFoldersDesc: "\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u76F8\u5BF9\u4E8E Vault \u7684\u6587\u4EF6\u5939\u8DEF\u5F84\u3002\u5176\u5B50\u6587\u4EF6\u5939\u4E5F\u4F1A\u81EA\u52A8\u5FFD\u7565\u3002",
    blacklistedConcepts: "\u6392\u9664\u7684\u6982\u5FF5",
    blacklistedConceptsDesc: "\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u6392\u9664\u7684\u6982\u5FF5\u3002\u5339\u914D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002",
    documentation: "\u6587\u6863",
    openManual: "\u6253\u5F00\u624B\u518C"
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
    masterUpdateMode: "expand",
    scopeCollapsed: false
  },
  settings: {
    language: "en",
    masterFolder: DEFAULT_MASTER_FOLDER_NAME,
    globalIndexFileName: DEFAULT_GLOBAL_INDEX_FILE_NAME,
    ignoredFolders: [],
    blacklistedConcepts: []
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
    this.masterPageName = this.getSuggestedMasterName();
  }
  getSuggestedMasterName() {
    const relativeFolders = Array.from(
      new Set(
        this.groups.flatMap(
          (group) => {
            var _a;
            return ((_a = group.folders) != null ? _a : []).map(
              (folder) => this.toVaultRelativePath(folder)
            );
          }
        )
      )
    ).filter((folder) => folder.length > 0);
    const folderPart = relativeFolders.length > 0 ? relativeFolders.join(" + ") : "General";
    return this.toValidFileName(
      `${this.concept} - ${folderPart}`
    );
  }
  toVaultRelativePath(path) {
    var _a, _b;
    const normalizedPath = path.replace(/\\/g, "/");
    const adapter = this.plugin.app.vault.adapter;
    const vaultRoot = ((_b = (_a = adapter.getBasePath) == null ? void 0 : _a.call(adapter)) != null ? _b : "").replace(/\\/g, "/").replace(/\/+$/, "");
    const rootPrefix = `${vaultRoot}/`;
    if (normalizedPath.toLowerCase().startsWith(
      rootPrefix.toLowerCase()
    )) {
      return normalizedPath.slice(rootPrefix.length);
    }
    return normalizedPath.replace(/^\/+/, "").replace(/^[A-Za-z]:\//, "");
  }
  toValidFileName(value) {
    return value.replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ").trim();
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
    if (totalOccurrences > 1e3) {
      contentEl.createEl("p", {
        text: this.plugin.t("largeMatchWarning")
      });
    }
    const optionsList = contentEl.createEl("ul");
    if (this.options.createLinks) {
      optionsList.createEl("li", {
        text: this.plugin.t("createLinks")
      });
    }
    if (this.options.createMaster) {
      const masterPageNameSetting = new import_obsidian.Setting(contentEl);
      masterPageNameSetting.settingEl.addClass(
        "concept-indexer-master-page-setting"
      );
      masterPageNameSetting.setName(this.plugin.t("masterPageName")).setDesc(this.plugin.t("masterPageNameDesc")).addText((text) => {
        text.setValue(this.masterPageName).onChange((value) => {
          this.masterPageName = value;
        });
        text.inputEl.addClass("concept-indexer-master-page-name");
        text.inputEl.select();
      });
      optionsList.createEl("li", {
        text: this.plugin.t("createMaster")
      });
      optionsList.createEl("li", {
        text: this.plugin.t(
          this.options.masterUpdateMode === "expand" ? "expandMode" : "synchronizeMode"
        )
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
        const masterPageName = this.masterPageName.trim();
        if (this.options.createMaster && !masterPageName) {
          new import_obsidian.Notice(
            this.plugin.t("masterPageNameRequired")
          );
          return;
        }
        this.close();
        this.onConfirm(masterPageName);
      });
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ConceptIndexerView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    var _a;
    super(leaf);
    this.concept = "";
    this.masterPageName = "";
    this.scopeAll = true;
    this.selectedFolders = /* @__PURE__ */ new Set();
    this.processingMode = "together";
    this.groups = [];
    this.expandedFolders = /* @__PURE__ */ new Set();
    this.createLinks = true;
    this.createMaster = true;
    this.addHashtag = false;
    this.masterUpdateMode = "expand";
    this.isProcessing = false;
    this.progressPhase = "";
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.progressFilePath = "";
    this.isSearching = false;
    this.searchPhase = "";
    this.searchCurrent = 0;
    this.searchTotal = 0;
    this.searchProgressLabel = null;
    this.searchProgressBar = null;
    this.processingProgressLabel = null;
    this.processingProgressBar = null;
    this.processingProgressFile = null;
    this.crossReferenceMode = false;
    this.crossSelectedPaths = /* @__PURE__ */ new Set();
    this.crossSelectedScope = "";
    this.crossReferencePlan = null;
    this.crossReferenceSearching = false;
    this.crossReferenceError = "";
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
    this.masterUpdateMode = (_a = state.masterUpdateMode) != null ? _a : "expand";
    this.scopeCollapsed = state.scopeCollapsed;
  }
  getViewType() {
    return VIEW_TYPE_CONCEPT_INDEXER;
  }
  getDisplayText() {
    return this.plugin.t("title");
  }
  getIcon() {
    return "concept-indexer-icon";
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
      masterUpdateMode: this.masterUpdateMode,
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
            this.updateSearchProgressDisplay();
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
              this.searchPhase = this.plugin.t("searchingFolder").replace("{folder}", folder);
              this.searchCurrent = progress.current;
              this.searchTotal = progress.total;
              this.updateSearchProgressDisplay();
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
            this.updateSearchProgressDisplay();
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
  toggleCrossReferenceMode() {
    this.crossReferenceMode = !this.crossReferenceMode;
    if (!this.crossReferenceMode) {
      this.crossReferencePlan = null;
      this.crossReferenceError = "";
      this.crossReferenceSearching = false;
    }
    this.render();
  }
  async searchCrossReferences() {
    if (this.crossSelectedPaths.size < 2) {
      new import_obsidian.Notice(this.plugin.t("selectAtLeastTwo"));
      return;
    }
    const requestedPaths = Array.from(this.crossSelectedPaths);
    this.crossReferenceSearching = true;
    this.crossReferencePlan = null;
    this.crossReferenceError = "";
    this.render();
    try {
      const plan = await this.plugin.previewCrossReferenceIndex(
        requestedPaths
      );
      if (requestedPaths.length !== this.crossSelectedPaths.size || requestedPaths.some(
        (path) => !this.crossSelectedPaths.has(path)
      )) {
        return;
      }
      this.crossReferencePlan = plan;
    } catch (error) {
      this.crossReferenceError = `${this.plugin.t("crossReferenceSearchFailed")} ${error instanceof Error ? error.message : ""}`;
    } finally {
      this.crossReferenceSearching = false;
      this.render();
    }
  }
  async generateCrossReferences() {
    const plan = this.crossReferencePlan;
    if (!plan || plan.documentCount === 0 && plan.blockCount === 0) {
      return;
    }
    this.crossReferenceSearching = true;
    this.render();
    try {
      await this.plugin.generateCrossReferenceIndex(
        Array.from(this.crossSelectedPaths)
      );
    } finally {
      this.crossReferenceSearching = false;
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
      addHashtag: this.addHashtag,
      masterUpdateMode: this.masterUpdateMode
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
      (masterPageName) => {
        void this.runProcessing(options, masterPageName);
      }
    ).open();
  }
  async runProcessing(options, masterPageName) {
    this.masterPageName = masterPageName;
    this.isProcessing = true;
    this.progressPhase = this.plugin.t("starting");
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.progressFilePath = "";
    this.render();
    try {
      const summary = await this.plugin.processConcept(
        this.concept,
        this.groups,
        options,
        masterPageName,
        (progress) => {
          var _a;
          this.progressPhase = progress.phase;
          this.progressCurrent = progress.current;
          this.progressTotal = progress.total;
          this.progressFilePath = (_a = progress.filePath) != null ? _a : "";
          this.updateProcessingProgressDisplay();
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
        `${this.plugin.t("processingFailed")} ${error instanceof Error ? error.message : ""}`,
        8e3
      );
    } finally {
      this.isProcessing = false;
      this.progressPhase = "";
      this.progressCurrent = 0;
      this.progressTotal = 0;
      this.progressFilePath = "";
      this.render();
    }
  }
  updateSearchProgressDisplay() {
    if (this.searchProgressLabel) {
      this.searchProgressLabel.textContent = `${this.searchPhase} ` + (this.searchTotal > 0 ? `${this.searchCurrent}/${this.searchTotal}` : "");
    }
    if (this.searchProgressBar) {
      this.searchProgressBar.max = Math.max(this.searchTotal, 1);
      this.searchProgressBar.value = this.searchCurrent;
      this.searchProgressBar.hidden = this.searchTotal <= 0;
    }
  }
  updateProcessingProgressDisplay() {
    if (this.processingProgressLabel) {
      this.processingProgressLabel.textContent = `${this.progressPhase} ` + (this.progressTotal > 0 ? `${this.progressCurrent}/${this.progressTotal}` : "");
    }
    if (this.processingProgressBar) {
      this.processingProgressBar.max = Math.max(this.progressTotal, 1);
      this.processingProgressBar.value = this.progressCurrent;
      this.processingProgressBar.hidden = this.progressTotal <= 0;
    }
    if (this.processingProgressFile) {
      this.processingProgressFile.textContent = this.progressFilePath ? `${this.plugin.t("processingFile")}: ${this.progressFilePath}` : "";
      this.processingProgressFile.hidden = !this.progressFilePath;
    }
  }
  renderCrossReferenceScope(container) {
    var _a;
    const candidates = this.plugin.getExistingMasterPageCandidates();
    const list = container.createDiv();
    list.style.marginBottom = "8px";
    if (candidates.length === 0) {
      list.createEl("p", {
        text: this.plugin.t("noMasterPages")
      });
      return;
    }
    const grouped = /* @__PURE__ */ new Map();
    for (const candidate of candidates) {
      const group = (_a = grouped.get(candidate.scope)) != null ? _a : [];
      group.push(candidate);
      grouped.set(candidate.scope, group);
    }
    for (const [scope, group] of grouped) {
      const heading = list.createEl("strong", {
        text: scope || this.plugin.t("allVault")
      });
      heading.style.display = "block";
      heading.style.margin = "6px 0 2px 0";
      for (const candidate of group) {
        const row = list.createEl("label");
        row.style.display = "block";
        row.style.margin = "4px 0 4px 12px";
        const checkbox = row.createEl("input", {
          type: "checkbox"
        });
        checkbox.checked = this.crossSelectedPaths.has(
          candidate.file.path
        );
        checkbox.disabled = this.crossSelectedScope !== "" && candidate.scope !== this.crossSelectedScope && !checkbox.checked;
        row.appendText(` ${candidate.concept}`);
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            if (!this.crossSelectedScope) {
              this.crossSelectedScope = candidate.scope;
            }
            if (candidate.scope !== this.crossSelectedScope) {
              checkbox.checked = false;
              return;
            }
            this.crossSelectedPaths.add(
              candidate.file.path
            );
          } else {
            this.crossSelectedPaths.delete(
              candidate.file.path
            );
            if (this.crossSelectedPaths.size === 0) {
              this.crossSelectedScope = "";
            }
          }
          this.crossReferencePlan = null;
          this.crossReferenceError = "";
          this.render();
        });
      }
    }
  }
  renderCrossReferenceResults(container) {
    const controls = container.createDiv();
    controls.style.display = "flex";
    controls.style.gap = "6px";
    controls.style.margin = "6px 0 8px 0";
    const searchButton = controls.createEl("button", {
      text: this.plugin.t("searchCrossReferences")
    });
    searchButton.addClass("mod-cta");
    searchButton.disabled = this.crossSelectedPaths.size < 2 || this.crossReferenceSearching;
    searchButton.style.flex = "1";
    searchButton.addEventListener("click", () => {
      void this.searchCrossReferences();
    });
    const generateButton = controls.createEl("button", {
      text: this.plugin.t("generateCrossReferences")
    });
    generateButton.disabled = !this.crossReferencePlan || this.crossReferencePlan.documentCount === 0 && this.crossReferencePlan.blockCount === 0 || this.crossReferenceSearching;
    generateButton.style.flex = "1";
    generateButton.addEventListener("click", () => {
      void this.generateCrossReferences();
    });
    const results = container.createDiv();
    results.style.margin = "8px 0";
    if (this.crossReferenceSearching) {
      results.createEl("p", {
        text: this.plugin.t("searching")
      });
      return;
    }
    if (this.crossReferenceError) {
      results.createEl("p", {
        text: this.crossReferenceError
      });
      return;
    }
    const plan = this.crossReferencePlan;
    if (!plan) {
      return;
    }
    results.createEl("p", {
      text: `${this.plugin.t("documentsRelated")}: ${plan.documentCount}`
    });
    results.createEl("p", {
      text: `${this.plugin.t("blocksRelated")}: ${plan.blockCount}`
    });
    if (plan.documentCount === 0 && plan.blockCount === 0) {
      results.createEl("p", {
        text: this.plugin.t("noCrossReferenceMatches")
      });
      return;
    }
    const renderResultSection = (title, items) => {
      results.createEl("strong", { text: title });
      const list = results.createEl("ul");
      list.style.margin = "2px 0 8px 18px";
      for (const item of items) {
        const row = list.createEl("li");
        const link = row.createEl("a", {
          text: item.label,
          href: "#"
        });
        link.addEventListener("click", (event) => {
          event.preventDefault();
          void this.app.workspace.openLinkText(
            item.path,
            "",
            false
          );
        });
      }
    };
    renderResultSection(
      this.plugin.t("documentsRelated"),
      plan.documents
    );
    renderResultSection(
      this.plugin.t("blocksRelated"),
      plan.blocks
    );
  }
  render() {
    const container = this.containerEl.children[1];
    container.empty();
    this.searchProgressLabel = null;
    this.searchProgressBar = null;
    this.processingProgressLabel = null;
    this.processingProgressBar = null;
    this.processingProgressFile = null;
    container.style.padding = "8px 10px";
    const header = container.createDiv();
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.gap = "8px";
    header.style.marginBottom = "8px";
    const logo = header.createEl("img", {
      attr: {
        src: this.plugin.getLogoResourcePath(),
        alt: this.plugin.t("title")
      }
    });
    logo.style.display = "block";
    logo.style.flex = "1";
    logo.style.minWidth = "0";
    logo.style.width = "100%";
    logo.style.height = "auto";
    const modeRow = container.createDiv();
    modeRow.style.display = "flex";
    modeRow.style.gap = "8px";
    modeRow.style.marginBottom = "10px";
    const indexModeButton = modeRow.createEl("button", {
      text: this.plugin.t("indexMode")
    });
    indexModeButton.style.flex = "1";
    if (!this.crossReferenceMode) {
      indexModeButton.addClass("mod-cta");
    }
    indexModeButton.addEventListener("click", () => {
      if (this.crossReferenceMode) {
        this.toggleCrossReferenceMode();
      }
    });
    const crossModeButton = modeRow.createEl("button", {
      text: this.plugin.t("crossReferences")
    });
    crossModeButton.style.flex = "1";
    if (this.crossReferenceMode) {
      crossModeButton.addClass("mod-cta");
    }
    crossModeButton.addEventListener("click", () => {
      if (!this.crossReferenceMode) {
        this.toggleCrossReferenceMode();
      }
    });
    const settingsButton = modeRow.createEl("button", {
      attr: {
        "aria-label": this.plugin.t("settingsTitle")
      }
    });
    settingsButton.title = this.plugin.t("settingsTitle");
    settingsButton.style.flex = "0 0 auto";
    (0, import_obsidian.setIcon)(settingsButton, "settings");
    settingsButton.addEventListener("click", () => {
      this.plugin.openSettings();
    });
    if (this.crossReferenceMode) {
      this.renderCrossReferenceScope(container);
      this.renderCrossReferenceResults(container);
      return;
    }
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
      text: this.plugin.t("useShort")
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
      this.scopeCollapsed = true;
      this.persistUiState();
      void this.runSearchFromView(
        conceptInput
      );
    });
    if (this.isSearching) {
      const box = container.createDiv();
      box.style.marginBottom = "8px";
      box.style.fontSize = "0.9em";
      this.searchProgressLabel = box.createSpan({
        text: `${this.searchPhase} ` + (this.searchTotal > 0 ? `${this.searchCurrent}/${this.searchTotal}` : "")
      });
      const searchProgress = box.createEl("progress");
      this.searchProgressBar = searchProgress;
      searchProgress.style.width = "calc(100% + 20px)";
      searchProgress.style.height = "14px";
      searchProgress.style.display = "block";
      searchProgress.style.marginTop = "4px";
      searchProgress.style.marginLeft = "-10px";
      this.updateSearchProgressDisplay();
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
        const modeRow2 = container.createDiv();
        modeRow2.style.display = "flex";
        modeRow2.style.alignItems = "center";
        modeRow2.style.gap = "12px";
        modeRow2.style.margin = "4px 0 8px 0";
        modeRow2.style.fontSize = "0.9em";
        modeRow2.createSpan({
          text: `${this.plugin.t("processing")}:`
        });
        const togetherLabel = modeRow2.createEl("label");
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
        const separateLabel = modeRow2.createEl("label");
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
    const optionsBlock = container.createDiv();
    const optionsHeader = optionsBlock.createEl("strong", {
      text: this.plugin.t("options")
    });
    optionsHeader.style.display = "block";
    optionsHeader.style.margin = "6px 0 4px 0";
    const optionsRow = optionsBlock.createDiv();
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
    new import_obsidian.Setting(optionsBlock).setName(this.plugin.t("updateMode")).addDropdown((dropdown) => {
      dropdown.addOption(
        "expand",
        this.plugin.t("expandMode")
      ).addOption(
        "synchronize",
        this.plugin.t("synchronizeMode")
      ).setValue(this.masterUpdateMode).onChange((value) => {
        this.masterUpdateMode = value;
        this.persistUiState();
      });
    });
    container.insertBefore(optionsBlock, scopeHeader);
    if (this.isProcessing) {
      const box = container.createDiv();
      box.style.margin = "6px 0 8px 0";
      box.style.fontSize = "0.9em";
      this.processingProgressLabel = box.createSpan({
        text: `${this.progressPhase} ` + (this.progressTotal > 0 ? `${this.progressCurrent}/${this.progressTotal}` : "")
      });
      const processingProgress = box.createEl("progress");
      this.processingProgressBar = processingProgress;
      processingProgress.style.width = "calc(100% + 20px)";
      processingProgress.style.height = "14px";
      processingProgress.style.display = "block";
      processingProgress.style.marginTop = "4px";
      processingProgress.style.marginLeft = "-10px";
      this.processingProgressFile = box.createDiv();
      this.processingProgressFile.style.marginTop = "4px";
      this.processingProgressFile.style.overflow = "hidden";
      this.processingProgressFile.style.textOverflow = "ellipsis";
      this.processingProgressFile.style.whiteSpace = "nowrap";
      this.updateProcessingProgressDisplay();
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
            this.groups,
            this.masterPageName
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
      text: `${totalNotes} ${this.plugin.t("notes")} \xB7 ${totalOccurrences} ${this.plugin.t("occurrences")}`
    }).style.fontSize = "0.9em";
    for (const group of this.groups) {
      if (this.processingMode === "separate" && this.groups.length > 1) {
        const groupOccurrences = group.results.reduce(
          (sum, item) => sum + item.occurrences,
          0
        );
        const groupTitle = container.createEl("div", {
          text: `${group.name} \xB7 ${group.results.length} ${this.plugin.t("notes")} \xB7 ${groupOccurrences} ${this.plugin.t("occurrences")}`
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
var CleanupConfirmModal = class extends import_obsidian.Modal {
  constructor(plugin, preview, onConfirm) {
    super(plugin.app);
    this.plugin = plugin;
    this.preview = preview;
    this.onConfirm = onConfirm;
  }
  onOpen() {
    var _a, _b, _c, _d, _e;
    const { contentEl } = this;
    contentEl.createEl("h2", {
      text: this.plugin.t("confirmCleanup")
    });
    contentEl.createEl("p", {
      text: this.preview.masterPage
    });
    const counts = /* @__PURE__ */ new Map();
    for (const item of this.preview.items) {
      counts.set(
        item.category,
        ((_a = counts.get(item.category)) != null ? _a : 0) + 1
      );
    }
    const list = contentEl.createEl("ul");
    list.createEl("li", {
      text: `${this.plugin.t("remove")}: ${(_b = counts.get("remove")) != null ? _b : 0}`
    });
    list.createEl("li", {
      text: `${this.plugin.t("keepShared")}: ${(_c = counts.get("keepShared")) != null ? _c : 0}`
    });
    list.createEl("li", {
      text: `${this.plugin.t("keepProtected")}: ${(_d = counts.get("keepProtected")) != null ? _d : 0}`
    });
    list.createEl("li", {
      text: `${this.plugin.t("conflict")}: ${(_e = counts.get("conflict")) != null ? _e : 0}`
    });
    const buttons = contentEl.createDiv();
    buttons.style.display = "flex";
    buttons.style.justifyContent = "flex-end";
    buttons.style.gap = "8px";
    buttons.style.marginTop = "16px";
    buttons.createEl("button", {
      text: this.plugin.t("cancel")
    }).addEventListener("click", () => this.close());
    const confirmButton = buttons.createEl("button", {
      text: this.plugin.t("executeCleanup")
    });
    confirmButton.addClass("mod-warning");
    confirmButton.addEventListener("click", () => {
      this.close();
      this.onConfirm();
    });
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
    const logo = containerEl.createEl("img", {
      attr: {
        src: this.plugin.getLogoResourcePath(),
        alt: this.plugin.t("settingsTitle")
      }
    });
    logo.style.display = "block";
    logo.style.width = "100%";
    logo.style.height = "auto";
    logo.style.margin = "0 0 8px 0";
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
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("blacklistedConcepts")).setDesc(
      this.plugin.t("blacklistedConceptsDesc")
    ).addTextArea((area) => {
      area.setPlaceholder(
        "Internal concept\nTemporary topic"
      ).setValue(
        settings.blacklistedConcepts.join(
          "\n"
        )
      ).onChange(async (value) => {
        settings.blacklistedConcepts = value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
        await this.plugin.updateSettings(
          settings
        );
      });
      area.inputEl.rows = 6;
    });
    const maintenanceHeading = containerEl.createEl("h3", {
      text: this.plugin.t("maintenance")
    });
    maintenanceHeading.style.marginTop = "24px";
    const analysisReport = containerEl.createDiv();
    analysisReport.style.marginTop = "8px";
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("changeAnalysis")).addButton((button) => {
      button.setButtonText(this.plugin.t("analyzeChanges")).setCta().onClick(async () => {
        analysisReport.empty();
        try {
          const analysis = await this.plugin.analyzeChanges();
          if (analysis.masters.length === 0) {
            analysisReport.createEl("p", {
              text: this.plugin.t("noChanges")
            });
            return;
          }
          for (const master of analysis.masters) {
            const section = analysisReport.createDiv();
            section.style.marginBottom = "14px";
            section.createEl("strong", {
              text: `${master.path} \u2014 ${master.exists ? this.plugin.t("existing") : this.plugin.t("deleted")}`
            });
            const list = section.createEl("ul");
            list.style.margin = "4px 0 0 18px";
            const addLine = (text) => {
              list.createEl("li", { text });
            };
            addLine(
              `${this.plugin.t("identifiers")}: ${master.identifiers}`
            );
            addLine(
              `${this.plugin.t("hashtags")}: ${master.hashtags}`
            );
            addLine(
              `${this.plugin.t("wikilinks")}: ${master.wikilinks}`
            );
            addLine(
              `${this.plugin.t("sharedReferences")}: ${master.sharedReferences}`
            );
            addLine(
              `${this.plugin.t("protectedElements")}: ${master.protectedElements}`
            );
            addLine(
              `${this.plugin.t("pluginCreatedElements")}: ${master.pluginCreatedElements}`
            );
          }
          if (analysis.sharedEntries.length > 0) {
            const heading = analysisReport.createEl("strong", {
              text: this.plugin.t("sharedReferences")
            });
            heading.style.display = "block";
            const list = analysisReport.createEl("ul");
            for (const entry of analysis.sharedEntries) {
              list.createEl("li", {
                text: `${entry.type}: ${entry.content} \u2014 ` + entry.masterPages.join(", ")
              });
            }
          }
        } catch (error) {
          analysisReport.createEl("p", {
            text: `${this.plugin.t("analysisFailed")} ${error instanceof Error ? error.message : ""}`
          });
        }
      });
    });
    let cleanupSelect = null;
    const cleanupReport = containerEl.createDiv();
    cleanupReport.style.marginTop = "8px";
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("cleanupPreview")).addDropdown((dropdown) => {
      dropdown.addOption(
        "",
        this.plugin.t("selectMasterForCleanup")
      );
      cleanupSelect = dropdown.selectEl;
      cleanupSelect.disabled = true;
    }).addButton((button) => {
      button.setButtonText(this.plugin.t("previewCleanup")).onClick(async () => {
        var _a, _b, _c, _d;
        const masterPage = cleanupSelect == null ? void 0 : cleanupSelect.value;
        if (!masterPage) {
          cleanupReport.empty();
          cleanupReport.createEl("p", {
            text: this.plugin.t("selectMasterForCleanup")
          });
          return;
        }
        cleanupReport.empty();
        try {
          const preview = await this.plugin.previewCleanup(masterPage);
          const categoryLabels = {
            remove: this.plugin.t("remove"),
            keepShared: this.plugin.t("keepShared"),
            keepProtected: this.plugin.t("keepProtected"),
            conflict: this.plugin.t("conflict")
          };
          const typeLabels = {
            identifier: this.plugin.t("identifiers"),
            hashtag: this.plugin.t("hashtags"),
            wikilink: this.plugin.t("wikilinks")
          };
          const categoryCounts = /* @__PURE__ */ new Map();
          const typeCounts = /* @__PURE__ */ new Map();
          for (const item of preview.items) {
            categoryCounts.set(
              item.category,
              ((_a = categoryCounts.get(item.category)) != null ? _a : 0) + 1
            );
            typeCounts.set(
              item.type,
              ((_b = typeCounts.get(item.type)) != null ? _b : 0) + 1
            );
          }
          cleanupReport.createEl("strong", {
            text: `${this.plugin.t("cleanupPreview")}: ${masterPage}`
          });
          const summary = cleanupReport.createEl("ul");
          for (const category of [
            "remove",
            "keepShared",
            "keepProtected",
            "conflict"
          ]) {
            summary.createEl("li", {
              text: `${categoryLabels[category]}: ${(_c = categoryCounts.get(category)) != null ? _c : 0}`
            });
          }
          const typeSummary = cleanupReport.createEl("ul");
          for (const type of [
            "identifier",
            "hashtag",
            "wikilink"
          ]) {
            typeSummary.createEl("li", {
              text: `${typeLabels[type]}: ${(_d = typeCounts.get(type)) != null ? _d : 0}`
            });
          }
          const conflicts = preview.items.filter(
            (item) => item.category === "conflict"
          );
          if (conflicts.length > 0) {
            cleanupReport.createEl("strong", {
              text: this.plugin.t("cleanupConflicts")
            });
            const conflictList = cleanupReport.createEl("ul");
            for (const conflict of conflicts) {
              conflictList.createEl("li", {
                text: `${conflict.document}: ${conflict.content}`
              });
            }
          }
        } catch (error) {
          cleanupReport.createEl("p", {
            text: `${this.plugin.t("analysisFailed")} ${error instanceof Error ? error.message : ""}`
          });
        }
      });
    });
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("executeCleanup")).addButton((button) => {
      button.setButtonText(this.plugin.t("executeCleanup")).setWarning().onClick(async () => {
        const masterPage = cleanupSelect == null ? void 0 : cleanupSelect.value;
        if (!masterPage) {
          cleanupReport.empty();
          cleanupReport.createEl("p", {
            text: this.plugin.t("selectMasterForCleanup")
          });
          return;
        }
        try {
          const preview = await this.plugin.previewCleanup(masterPage);
          new CleanupConfirmModal(
            this.plugin,
            preview,
            () => {
              void this.plugin.executeCleanup(masterPage).catch((error) => {
                new import_obsidian.Notice(
                  `${this.plugin.t("analysisFailed")} ${error instanceof Error ? error.message : ""}`,
                  1e4
                );
              });
            }
          ).open();
        } catch (error) {
          cleanupReport.empty();
          cleanupReport.createEl("p", {
            text: `${this.plugin.t("analysisFailed")} ${error instanceof Error ? error.message : ""}`
          });
        }
      });
    });
    void this.plugin.getRegisteredChangeMasterPages().then((masterPages) => {
      if (!cleanupSelect) {
        return;
      }
      cleanupSelect.options.length = 0;
      cleanupSelect.add(
        new Option(
          this.plugin.t("selectMasterForCleanup"),
          ""
        )
      );
      for (const masterPage of masterPages) {
        cleanupSelect.add(
          new Option(masterPage, masterPage)
        );
      }
      cleanupSelect.disabled = masterPages.length === 0;
    }).catch((error) => {
      cleanupReport.createEl("p", {
        text: `${this.plugin.t("analysisFailed")} ${error instanceof Error ? error.message : ""}`
      });
    });
    const documentationHeading = containerEl.createEl("h3", {
      text: this.plugin.t("documentation")
    });
    documentationHeading.style.marginTop = "24px";
    new import_obsidian.Setting(containerEl).setName(this.plugin.t("documentation")).addButton((button) => {
      button.setButtonText(this.plugin.t("openManual")).onClick(() => {
        const language = settings.language === "es" ? "es" : "en";
        const url = `https://corrosionlabs.github.io/documentation/concept-indexer-v2/?lang=${language}`;
        window.open(url, "_blank");
      });
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
    await this.registerPluginIcon();
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
      "concept-indexer-icon",
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
        ignoredFolders: (_f = (_e = loaded == null ? void 0 : loaded.settings) == null ? void 0 : _e.ignoredFolders) != null ? _f : DEFAULT_DATA.settings.ignoredFolders,
        blacklistedConcepts: (_h = (_g = loaded == null ? void 0 : loaded.settings) == null ? void 0 : _g.blacklistedConcepts) != null ? _h : DEFAULT_DATA.settings.blacklistedConcepts
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
  openSettings() {
    const setting = this.app.setting;
    if (!setting) {
      return;
    }
    setting.open();
    setting.openTabById(this.manifest.id);
  }
  getSettings() {
    return {
      ...this.data.settings,
      ignoredFolders: [
        ...this.data.settings.ignoredFolders
      ],
      blacklistedConcepts: [
        ...this.data.settings.blacklistedConcepts
      ]
    };
  }
  getChangeLogPath() {
    return `${this.getMasterFolderName()}/changes.json`;
  }
  parseChangeLog(raw) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (_error) {
      throw new Error("The Concept Indexer change log is not valid JSON.");
    }
    if (!parsed || typeof parsed !== "object" || parsed.version !== 1 || !Array.isArray(parsed.entries)) {
      throw new Error("The Concept Indexer change log has an invalid format.");
    }
    const entries = parsed.entries;
    const validTypes = /* @__PURE__ */ new Set([
      "wikilink",
      "hashtag",
      "identifier"
    ]);
    for (const entry of entries) {
      if (!entry || typeof entry !== "object" || !validTypes.has(entry.type) || typeof entry.document !== "string" || typeof entry.content !== "string" || !Array.isArray(entry.masterPages) || !entry.masterPages.every(
        (masterPage) => typeof masterPage === "string"
      ) || typeof entry.created !== "boolean") {
        throw new Error("The Concept Indexer change log contains an invalid entry.");
      }
    }
    return {
      version: 1,
      entries: entries.map((entry) => {
        const validEntry = entry;
        return {
          type: validEntry.type,
          document: validEntry.document,
          content: validEntry.content,
          masterPages: [...validEntry.masterPages],
          created: validEntry.created
        };
      })
    };
  }
  async readChangeLog() {
    const path = this.getChangeLogPath();
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!file) {
      return {
        version: 1,
        entries: []
      };
    }
    if (!(file instanceof import_obsidian.TFile)) {
      throw new Error("The Concept Indexer change log path is not a file.");
    }
    return this.parseChangeLog(
      await this.app.vault.read(file)
    );
  }
  async analyzeChanges() {
    const log = await this.readChangeLog();
    const masterPaths = /* @__PURE__ */ new Set();
    for (const entry of log.entries) {
      for (const masterPage of entry.masterPages) {
        masterPaths.add(masterPage);
      }
    }
    const masters = Array.from(masterPaths).sort((a, b) => a.localeCompare(b)).map((path) => ({
      path,
      exists: this.app.vault.getAbstractFileByPath(path) instanceof import_obsidian.TFile,
      identifiers: 0,
      hashtags: 0,
      wikilinks: 0,
      sharedReferences: 0,
      protectedElements: 0,
      pluginCreatedElements: 0
    }));
    const masterByPath = new Map(
      masters.map((master) => [master.path, master])
    );
    const sharedEntries = [];
    for (const entry of log.entries) {
      if (entry.masterPages.length > 1) {
        sharedEntries.push(entry);
      }
      for (const masterPage of entry.masterPages) {
        const master = masterByPath.get(masterPage);
        if (!master) {
          continue;
        }
        switch (entry.type) {
          case "identifier":
            master.identifiers++;
            break;
          case "hashtag":
            master.hashtags++;
            break;
          case "wikilink":
            master.wikilinks++;
            break;
        }
        if (entry.masterPages.length > 1) {
          master.sharedReferences++;
        }
        if (entry.created) {
          master.pluginCreatedElements++;
        } else {
          master.protectedElements++;
        }
      }
    }
    return { masters, sharedEntries };
  }
  async getRegisteredChangeMasterPages() {
    const log = await this.readChangeLog();
    const masterPaths = /* @__PURE__ */ new Set();
    for (const entry of log.entries) {
      for (const masterPage of entry.masterPages) {
        masterPaths.add(masterPage);
      }
    }
    return Array.from(masterPaths).sort(
      (a, b) => a.localeCompare(b)
    );
  }
  async previewCleanup(masterPage) {
    const storedLog = await this.readChangeLog();
    const log = {
      version: 1,
      entries: this.mergeChangeLogEntries(
        storedLog.entries,
        []
      )
    };
    const items = [];
    for (const entry of log.entries) {
      if (!entry.masterPages.includes(masterPage)) {
        continue;
      }
      const document = this.app.vault.getAbstractFileByPath(entry.document);
      let category;
      if (!(document instanceof import_obsidian.TFile)) {
        category = "conflict";
      } else {
        const content = await this.app.vault.read(document);
        if (!content.includes(entry.content)) {
          category = "conflict";
        } else if (entry.masterPages.length > 1) {
          category = "keepShared";
        } else if (!entry.created) {
          category = "keepProtected";
        } else {
          category = "remove";
        }
      }
      items.push({
        ...entry,
        masterPages: [...entry.masterPages],
        category
      });
    }
    return { masterPage, items };
  }
  removeCleanupContent(text, entry) {
    var _a;
    if (entry.type === "wikilink") {
      const displayMatch = entry.content.match(
        /^\[\[[^|\]]+\|([^\]]+)\]\]$/
      );
      const replacement = (_a = displayMatch == null ? void 0 : displayMatch[1]) != null ? _a : "";
      const occurrences = text.split(entry.content).length - 1;
      return {
        text: occurrences > 0 ? text.split(entry.content).join(replacement) : text,
        removed: occurrences
      };
    }
    const escaped = this.escapeRegex(entry.content);
    const tokenRegex = new RegExp(
      `(^|\\s)${escaped}(?=\\s|$)`,
      "g"
    );
    let removed = 0;
    const updated = text.replace(tokenRegex, (_match, prefix) => {
      removed++;
      return prefix;
    });
    return { text: updated, removed };
  }
  async executeCleanup(masterPage) {
    var _a;
    const preview = await this.previewCleanup(masterPage);
    const removable = preview.items.filter(
      (item) => item.category === "remove"
    );
    const storedLog = await this.readChangeLog();
    const log = {
      version: 1,
      entries: this.mergeChangeLogEntries(
        storedLog.entries,
        []
      )
    };
    const byDocument = /* @__PURE__ */ new Map();
    for (const item of removable) {
      const items = (_a = byDocument.get(item.document)) != null ? _a : [];
      items.push(item);
      byDocument.set(item.document, items);
    }
    const modified = [];
    const detachedKeys = /* @__PURE__ */ new Set();
    const failures = [];
    for (const item of preview.items) {
      if (item.category === "keepShared" || item.category === "keepProtected") {
        detachedKeys.add(
          `${item.type}\0${item.document}\0${item.content}`
        );
      }
    }
    for (const [documentPath, items] of byDocument) {
      const file = this.app.vault.getAbstractFileByPath(
        documentPath
      );
      if (!(file instanceof import_obsidian.TFile)) {
        failures.push(documentPath);
        continue;
      }
      let original;
      try {
        original = await this.app.vault.read(file);
      } catch (_error) {
        failures.push(documentPath);
        continue;
      }
      let updated = original;
      let valid = true;
      for (const item of items) {
        const result = this.removeCleanupContent(
          updated,
          item
        );
        if (result.removed === 0) {
          valid = false;
          break;
        }
        updated = result.text;
      }
      if (!valid) {
        failures.push(documentPath);
        continue;
      }
      try {
        await this.app.vault.modify(file, updated);
        modified.push({ file, original });
        for (const item of items) {
          detachedKeys.add(
            `${item.type}\0${item.document}\0${item.content}`
          );
        }
      } catch (_error) {
        failures.push(documentPath);
      }
    }
    if (modified.length > 0 || detachedKeys.size > 0) {
      const updatedLog = {
        version: 1,
        entries: log.entries.flatMap((entry) => {
          const key = `${entry.type}\0${entry.document}\0${entry.content}`;
          if (!detachedKeys.has(key)) {
            return [entry];
          }
          const remainingMasters = entry.masterPages.filter(
            (path) => path !== masterPage
          );
          return remainingMasters.length > 0 ? [{ ...entry, masterPages: remainingMasters }] : [];
        })
      };
      try {
        await this.writeChangeLog(updatedLog);
      } catch (error) {
        for (const change of modified.reverse()) {
          await this.app.vault.modify(
            change.file,
            change.original
          );
        }
        throw error;
      }
    }
    if (failures.length > 0) {
      new import_obsidian.Notice(
        `${this.t("cleanupPartial")}: ${failures.join(", ")}`,
        1e4
      );
      return;
    }
    if (modified.length === 0 && detachedKeys.size === 0) {
      new import_obsidian.Notice(this.t("cleanupNoRemovable"));
      return;
    }
    new import_obsidian.Notice(this.t("cleanupCompleted"), 8e3);
  }
  mergeChangeLogEntries(base, additional) {
    const merged = [];
    for (const entry of [...base, ...additional]) {
      const existing = merged.find(
        (candidate) => candidate.type === entry.type && candidate.document === entry.document && candidate.content === entry.content
      );
      if (existing) {
        existing.created = existing.created || entry.created;
        for (const masterPage of entry.masterPages) {
          if (!existing.masterPages.includes(masterPage)) {
            existing.masterPages.push(masterPage);
          }
        }
        continue;
      }
      merged.push({
        ...entry,
        masterPages: [...entry.masterPages]
      });
    }
    return merged;
  }
  async writeChangeLog(log) {
    const path = this.getChangeLogPath();
    const folderPath = path.substring(0, path.lastIndexOf("/"));
    await this.ensureFolder(folderPath);
    const serialized = JSON.stringify(log, null, 2) + "\n";
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (!(existing instanceof import_obsidian.TFile)) {
      if (existing) {
        throw new Error("The Concept Indexer change log path is not a file.");
      }
      await this.app.vault.create(path, serialized);
      return;
    }
    const backupPath = `${path}.bak`;
    const backup = this.app.vault.getAbstractFileByPath(backupPath);
    const existingContent = await this.app.vault.read(existing);
    if (backup instanceof import_obsidian.TFile) {
      await this.app.vault.modify(backup, existingContent);
    } else if (!backup) {
      await this.app.vault.create(backupPath, existingContent);
    } else {
      throw new Error("The Concept Indexer change log backup path is not a file.");
    }
    await this.app.vault.modify(existing, serialized);
  }
  async recordChangeEntries(changeLog, entries) {
    if (entries.length === 0) {
      return;
    }
    const latest = await this.readChangeLog();
    const merged = {
      version: 1,
      entries: this.mergeChangeLogEntries(
        latest.entries,
        [...changeLog.entries, ...entries]
      )
    };
    await this.writeChangeLog(merged);
    changeLog.entries = merged.entries;
  }
  async modifyDocumentWithChangeLog(file, original, updated, entries, changeLog) {
    if (original === updated) {
      await this.recordChangeEntries(changeLog, entries);
      return;
    }
    if (entries.length === 0) {
      throw new Error(
        `Cannot modify ${file.path} without a change-log entry.`
      );
    }
    await this.app.vault.modify(file, updated);
    try {
      await this.recordChangeEntries(changeLog, entries);
    } catch (error) {
      await this.app.vault.modify(file, original);
      throw error;
    }
  }
  getLogoResourcePath() {
    var _a;
    const pluginDirectory = (_a = this.manifest.dir) != null ? _a : `.obsidian/plugins/${this.manifest.id}`;
    return this.app.vault.adapter.getResourcePath(
      `${pluginDirectory}/assets/logo.svg`
    );
  }
  async registerPluginIcon() {
    var _a;
    const pluginDirectory = (_a = this.manifest.dir) != null ? _a : `.obsidian/plugins/${this.manifest.id}`;
    const iconPath = `${pluginDirectory}/assets/icon.svg`;
    try {
      const svgContent = await this.app.vault.adapter.read(iconPath);
      (0, import_obsidian.addIcon)(
        "concept-indexer-icon",
        svgContent
      );
    } catch (error) {
      console.error(
        "[Concept Indexer] Failed to load custom icon",
        error
      );
    }
  }
  async updateSettings(settings) {
    this.data.settings = {
      ...settings,
      ignoredFolders: [
        ...settings.ignoredFolders
      ],
      blacklistedConcepts: [
        ...settings.blacklistedConcepts
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
  getExistingMasterPageCandidates() {
    const indexBase = this.getGlobalIndexFileName().replace(/\.md$/i, "");
    return this.app.vault.getMarkdownFiles().filter(
      (file) => this.isMasterPage(file.path) && file.basename !== indexBase && !file.basename.includes(" + ")
    ).map((file) => ({
      file,
      concept: file.basename,
      scope: this.getParentFolder(file.path)
    })).sort(
      (a, b) => a.scope.localeCompare(b.scope) || a.concept.localeCompare(
        b.concept,
        void 0,
        { sensitivity: "base" }
      )
    );
  }
  async generateCrossReferenceIndex(masterPaths) {
    try {
      const plan = await this.calculateCrossReferencePlan(masterPaths);
      const existing = this.app.vault.getAbstractFileByPath(
        plan.crossPath
      );
      if (existing instanceof import_obsidian.TFile) {
        await this.app.vault.modify(
          existing,
          plan.content
        );
      } else {
        await this.ensureFolder(plan.scope);
        await this.app.vault.create(
          plan.crossPath,
          plan.content
        );
      }
      for (const file of plan.files) {
        await this.addCrossReferenceToMaster(
          file,
          plan.crossPath.replace(/\.md$/i, ""),
          plan.crossName
        );
      }
      new import_obsidian.Notice(this.t("crossReferencesCreated"));
    } catch (error) {
      new import_obsidian.Notice(
        `${this.t("crossReferenceSearchFailed")} ${error instanceof Error ? error.message : ""}`
      );
    }
  }
  async previewCrossReferenceIndex(masterPaths) {
    return this.calculateCrossReferencePlan(masterPaths);
  }
  async calculateCrossReferencePlan(masterPaths) {
    const files = masterPaths.map(
      (path) => this.app.vault.getAbstractFileByPath(path)
    ).filter((file) => file instanceof import_obsidian.TFile);
    if (files.length < 2) {
      throw new Error(this.t("selectAtLeastTwo"));
    }
    const scope = this.getParentFolder(files[0].path);
    if (files.some(
      (file) => this.getParentFolder(file.path) !== scope
    )) {
      throw new Error(this.t("crossReferenceScopeMismatch"));
    }
    const concepts = files.map((file) => file.basename).sort(
      (a, b) => a.localeCompare(
        b,
        void 0,
        { sensitivity: "base" }
      )
    );
    const crossName = concepts.join(" + ");
    const crossPath = `${scope ? `${scope}/` : ""}${crossName}.md`;
    const masterData = await Promise.all(
      files.map(
        (file) => this.readCrossReferenceMasterData(file)
      )
    );
    const commonDocuments = Array.from(
      masterData[0].documents.keys()
    ).filter(
      (path) => masterData.every(
        (data) => data.documents.has(path)
      )
    ).sort((a, b) => a.localeCompare(b));
    const commonBlocks = commonDocuments.flatMap(
      (path) => {
        var _a, _b;
        const firstBlocks = (_b = (_a = masterData[0].documents.get(path)) == null ? void 0 : _a.blocks) != null ? _b : /* @__PURE__ */ new Map();
        return Array.from(firstBlocks.keys()).filter(
          (link) => masterData.every(
            (data) => {
              var _a2;
              return (_a2 = data.documents.get(path)) == null ? void 0 : _a2.blocks.has(link);
            }
          )
        ).map((link) => {
          var _a2, _b2;
          return {
            link,
            label: (_b2 = (_a2 = masterData[0].documents.get(path)) == null ? void 0 : _a2.blocks.get(link)) != null ? _b2 : link
          };
        });
      }
    );
    const documents = commonDocuments.map((path) => {
      var _a, _b, _c;
      const label = (_c = (_b = (_a = masterData[0].documents.get(path)) == null ? void 0 : _a.label) != null ? _b : path.split("/").pop()) != null ? _c : path;
      return { path, label };
    });
    const blocks = commonBlocks.map(
      (block) => ({
        path: block.link,
        label: block.label
      })
    );
    const documentLines = documents.map(
      (document) => `- [[${document.path}|${document.label}]]`
    );
    const blockLines = blocks.map(
      (block) => `- [[${block.path}|${block.label}]]`
    );
    const content = `# ${crossName}

## ${this.t("documentsRelated")}

${documentLines.join("\n") || "_None._"}

## ${this.t("blocksRelated")}

${blockLines.join("\n") || "_None._"}
`;
    return {
      files,
      scope,
      crossName,
      crossPath,
      content,
      documentCount: commonDocuments.length,
      blockCount: commonBlocks.length,
      documents,
      blocks
    };
  }
  async readCrossReferenceMasterData(file) {
    var _a, _b;
    const lines = (await this.app.vault.read(file)).split("\n");
    const documents = /* @__PURE__ */ new Map();
    let currentDocument = null;
    for (const line of lines) {
      const documentMatch = line.match(
        /^###\s+\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/
      );
      if (documentMatch) {
        currentDocument = {
          label: (_a = documentMatch[2]) != null ? _a : documentMatch[1],
          blocks: /* @__PURE__ */ new Map()
        };
        documents.set(documentMatch[1], currentDocument);
        continue;
      }
      if (!currentDocument) {
        continue;
      }
      const referenceMatch = line.match(
        /^[-*]\s+\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/
      );
      if (!referenceMatch) {
        continue;
      }
      const target = referenceMatch[1];
      const blockMatch = target.match(
        /^(.+)#\^(ci-|citag-)([A-Za-z0-9-]+)$/i
      );
      if (blockMatch) {
        const blockKey = `${blockMatch[1]}#^${blockMatch[2]}` + blockMatch[3];
        currentDocument.blocks.set(
          blockKey,
          (_b = referenceMatch[2]) != null ? _b : target
        );
      }
    }
    return { documents };
  }
  async searchConcept(concept, folders, onProgress) {
    if (this.isConceptBlacklisted(concept)) {
      return [];
    }
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
  async processConcept(concept, groups, options, masterPageName, onProgress) {
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
    if (this.isConceptBlacklisted(concept)) {
      return summary;
    }
    const changeLog = await this.readChangeLog();
    const hashtag = this.normalizeHashtag(concept);
    const masterTargets = /* @__PURE__ */ new Map();
    const effectiveMasterPageName = options.createMaster ? masterPageName : concept;
    for (const group of groups) {
      if (options.createMaster) {
        const masterPath = this.getMasterPagePath(
          effectiveMasterPageName,
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
        effectiveMasterPageName,
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
        const changeEntries = [];
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
          for (const content of replacement.changes) {
            changeEntries.push({
              type: "wikilink",
              document: file.path,
              content,
              masterPages: [masterPath],
              created: true
            });
          }
        }
        if (options.addHashtag) {
          const hashtagInput = updated;
          const hashtagResult = this.addHashtagIfMissing(
            updated,
            hashtag
          );
          updated = hashtagResult.text;
          if (hashtagResult.added) {
            summary.hashtagsAdded++;
          }
          if (hashtagResult.text !== hashtagInput) {
            fileChanged = true;
          }
          for (const change of hashtagResult.changes) {
            changeEntries.push({
              type: "hashtag",
              document: file.path,
              content: change.content,
              masterPages: [masterPath],
              created: change.created
            });
          }
        }
        if (fileChanged || changeEntries.length > 0) {
          await this.modifyDocumentWithChangeLog(
            file,
            original,
            updated,
            changeEntries,
            changeLog
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
          target.path,
          options.masterUpdateMode,
          changeLog,
          (progress) => onProgress == null ? void 0 : onProgress(progress)
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
  async openCurrentMasterPage(concept, groups, masterPageName = concept) {
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
      masterPageName,
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
    const protectedContent = this.getProtectedContent(lines);
    let count = 0;
    const changes = [];
    const output = lines.map((line, index) => {
      var _a, _b, _c;
      if (protectedContent.protectedLines.has(index)) {
        return line;
      }
      const protectedRanges = [
        ...(_a = protectedContent.rangesByLine.get(index)) != null ? _a : [],
        ...(_b = protectedContent.hashtagRangesByLine.get(index)) != null ? _b : []
      ];
      let lastIndex = 0;
      let rebuilt = "";
      for (const match of line.matchAll(regex)) {
        const start = (_c = match.index) != null ? _c : 0;
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
        changes.push(target);
      }
      if (lastIndex === 0) {
        return line;
      }
      rebuilt += line.slice(lastIndex);
      return rebuilt;
    });
    return {
      text: output.join("\n"),
      count,
      changes
    };
  }
  isConceptBlacklisted(concept) {
    const normalizedConcept = concept.trim().toLocaleLowerCase();
    if (!normalizedConcept) {
      return false;
    }
    return this.data.settings.blacklistedConcepts.some(
      (item) => item.trim().toLocaleLowerCase() === normalizedConcept
    );
  }
  getProtectedContent(lines) {
    var _a, _b, _c, _d;
    const protectedLines = /* @__PURE__ */ new Set();
    const rangesByLine = /* @__PURE__ */ new Map();
    const hashtagRangesByLine = /* @__PURE__ */ new Map();
    const excludedConceptRangesByLine = /* @__PURE__ */ new Map();
    let inFrontmatter = false;
    let inFence = false;
    let fenceCharacter = "";
    let fenceLength = 0;
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const trimmed = line.trim();
      if (index === 0 && trimmed === "---") {
        inFrontmatter = true;
      }
      if (inFrontmatter) {
        protectedLines.add(index);
        if (index > 0 && trimmed === "---") {
          inFrontmatter = false;
        }
        continue;
      }
      const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
      if (inFence) {
        protectedLines.add(index);
        if (fenceMatch && fenceMatch[1][0] === fenceCharacter && fenceMatch[1].length >= fenceLength) {
          inFence = false;
          fenceCharacter = "";
          fenceLength = 0;
        }
        continue;
      }
      if (fenceMatch) {
        protectedLines.add(index);
        inFence = true;
        fenceCharacter = fenceMatch[1][0];
        fenceLength = fenceMatch[1].length;
        continue;
      }
      if (/^<!doctype\s+html\b/i.test(trimmed) || /^<html(?:\s|>)/i.test(trimmed)) {
        let htmlStart = index;
        let htmlEnd = index;
        while (htmlEnd < lines.length) {
          const possibleHtmlStart = lines[htmlEnd].trim();
          if (htmlEnd > index && /^<!doctype\s+html\b/i.test(
            possibleHtmlStart
          ) || htmlEnd > index && /^<html(?:\s|>)/i.test(
            possibleHtmlStart
          )) {
            htmlStart = htmlEnd;
          }
          if (/<\/html\s*>/i.test(lines[htmlEnd])) {
            break;
          }
          htmlEnd++;
        }
        if (htmlEnd < lines.length) {
          for (let htmlIndex = htmlStart; htmlIndex <= htmlEnd; htmlIndex++) {
            protectedLines.add(htmlIndex);
          }
          index = htmlEnd;
          continue;
        }
      }
      const ranges = [];
      const patterns = [
        /\[\[[^\]]*?\]\]/g,
        /(`+)(.*?)\1/g,
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
      if (ranges.length > 0) {
        rangesByLine.set(index, ranges);
      }
      const hashtagRanges = [];
      const hashtagPattern = /(^|\s)#[A-Za-z0-9_-]+(?=\s|$)/g;
      for (const match of line.matchAll(hashtagPattern)) {
        const prefixLength = (_c = (_b = match[1]) == null ? void 0 : _b.length) != null ? _c : 0;
        const start = ((_d = match.index) != null ? _d : 0) + prefixLength;
        hashtagRanges.push({
          start,
          end: start + match[0].length - prefixLength
        });
      }
      if (hashtagRanges.length > 0) {
        hashtagRangesByLine.set(
          index,
          hashtagRanges
        );
      }
      const excludedConceptRanges = this.getConceptExcludedRanges(line);
      if (excludedConceptRanges.length > 0) {
        excludedConceptRangesByLine.set(
          index,
          excludedConceptRanges
        );
      }
    }
    return {
      protectedLines,
      rangesByLine,
      hashtagRangesByLine,
      excludedConceptRangesByLine
    };
  }
  getConceptExcludedRanges(line) {
    var _a, _b, _c, _d, _e;
    const ranges = [];
    for (const match of line.matchAll(/(`+)(.*?)\1/g)) {
      const start = (_a = match.index) != null ? _a : 0;
      ranges.push({
        start,
        end: start + match[0].length
      });
    }
    for (const match of line.matchAll(
      /(^|\s)#[A-Za-z0-9_-]+(?=\s|$)/g
    )) {
      const prefixLength = (_c = (_b = match[1]) == null ? void 0 : _b.length) != null ? _c : 0;
      const start = ((_d = match.index) != null ? _d : 0) + prefixLength;
      ranges.push({
        start,
        end: start + match[0].length - prefixLength
      });
    }
    for (const match of line.matchAll(/\[\[([^\]]+)\]\]/g)) {
      const start = (_e = match.index) != null ? _e : 0;
      const pipeIndex = match[1].indexOf("|");
      if (pipeIndex === -1) {
        ranges.push({
          start,
          end: start + match[0].length
        });
        continue;
      }
      ranges.push({
        start,
        end: start + pipeIndex + 3
      });
      ranges.push({
        start: start + match[0].length - 2,
        end: start + match[0].length
      });
    }
    return ranges;
  }
  isRangeProtected(start, end, ranges) {
    return ranges.some(
      (range) => start >= range.start && end <= range.end
    );
  }
  hasUnprotectedMatch(line, regex, ranges) {
    var _a;
    regex.lastIndex = 0;
    for (const match of line.matchAll(regex)) {
      const start = (_a = match.index) != null ? _a : 0;
      const end = start + match[0].length;
      if (!this.isRangeProtected(start, end, ranges)) {
        return true;
      }
    }
    return false;
  }
  addHashtagIfMissing(text, hashtag) {
    var _a;
    if (!hashtag) {
      return {
        text,
        added: false,
        changes: []
      };
    }
    const lines = text.split("\n");
    let contentStart = 0;
    if (((_a = lines[0]) == null ? void 0 : _a.trim()) === "---") {
      for (let index = 1; index < lines.length; index++) {
        if (lines[index].trim() === "---") {
          contentStart = index + 1;
          break;
        }
      }
    }
    const isManagedTagLine = (line) => {
      const tokens = line.trim().split(/\s+/);
      if (tokens.length === 0 || !line.trim()) {
        return false;
      }
      return tokens.every(
        (token) => /^#[A-Za-z0-9_-]+$/.test(token) || /^\^(?:citag|ci)-[A-Za-z0-9-]+$/i.test(token)
      );
    };
    const managedLines = [];
    let scanIndex = contentStart;
    while (scanIndex < lines.length) {
      if (lines[scanIndex].trim() === "") {
        scanIndex++;
        continue;
      }
      if (!isManagedTagLine(lines[scanIndex])) {
        break;
      }
      managedLines.push(scanIndex);
      scanIndex++;
    }
    const tags = [];
    const tagKeys = /* @__PURE__ */ new Set();
    const blockIds = [];
    for (const lineIndex of managedLines) {
      for (const token of lines[lineIndex].trim().split(/\s+/)) {
        if (token.startsWith("#")) {
          const key = token.toLocaleLowerCase();
          if (!tagKeys.has(key)) {
            tagKeys.add(key);
            tags.push(token);
          }
        } else {
          blockIds.push(token);
        }
      }
    }
    const hashtagKey = `#${hashtag}`.toLocaleLowerCase();
    const hadExistingTag = tagKeys.has(hashtagKey);
    if (!hadExistingTag) {
      tags.push(`#${hashtag}`);
      tagKeys.add(hashtagKey);
    }
    const tagLine = [
      ...tags,
      ...blockIds
    ].join(" ");
    const managedLineSet = new Set(managedLines);
    const remainingLines = lines.filter(
      (_line, index) => !managedLineSet.has(index)
    );
    const remainingContentStart = contentStart - managedLines.filter(
      (index) => index < contentStart
    ).length;
    while (remainingContentStart < remainingLines.length && remainingLines[remainingContentStart].trim() === "") {
      remainingLines.splice(remainingContentStart, 1);
    }
    const before = remainingLines.slice(0, remainingContentStart);
    const after = remainingLines.slice(remainingContentStart);
    const output = [
      ...before,
      ...tagLine ? [tagLine] : [],
      ...after.length > 0 ? ["", ...after] : []
    ];
    return {
      text: output.join("\n"),
      added: !hadExistingTag,
      changes: [{
        content: `#${hashtag}`,
        created: !hadExistingTag
      }]
    };
  }
  async createOrUpdateMasterPage(concept, group, masterPath, updateMode, changeLog, onProgress) {
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
    const sourceResults = freshResults.filter(
      (result) => result.file.path !== masterPath && !this.isMasterPage(result.file.path)
    );
    let sourceCurrent = 0;
    onProgress == null ? void 0 : onProgress({
      phase: "Updating master pages...",
      current: 0,
      total: sourceResults.length
    });
    for (const result of freshResults) {
      if (result.file.path === masterPath || this.isMasterPage(result.file.path)) {
        continue;
      }
      onProgress == null ? void 0 : onProgress({
        phase: "Updating master pages...",
        current: sourceCurrent + 1,
        total: sourceResults.length,
        filePath: result.file.path
      });
      const references = await this.ensureReferenceTargets(
        result.file,
        concept,
        masterPath,
        changeLog
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
      sourceCurrent++;
      onProgress == null ? void 0 : onProgress({
        phase: "Updating master pages...",
        current: sourceCurrent,
        total: sourceResults.length,
        filePath: result.file.path
      });
    }
    const existing = this.app.vault.getAbstractFileByPath(
      masterPath
    );
    let outputSections = sections;
    if (updateMode === "expand" && existing instanceof import_obsidian.TFile) {
      const existingContent = await this.app.vault.read(existing);
      outputSections = this.mergeMasterSections(
        existingContent,
        sections
      );
    }
    let content = `# ${concept}

## References

${outputSections.join("\n\n") || "_No references found._"}
`;
    if (existing instanceof import_obsidian.TFile) {
      content = this.preserveCrossReferenceSection(
        await this.app.vault.read(existing),
        content
      );
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
  preserveCrossReferenceSection(existingContent, generatedContent) {
    const lines = existingContent.split("\n");
    const headingIndex = lines.findIndex(
      (line) => line.trim() === "## Cross references"
    );
    if (headingIndex === -1) {
      return generatedContent;
    }
    const nextHeading = lines.findIndex(
      (line, index) => index > headingIndex && /^##\s+/.test(line)
    );
    const section = lines.slice(
      headingIndex,
      nextHeading === -1 ? lines.length : nextHeading
    ).join("\n").trim();
    const generatedLines = generatedContent.trimEnd().split("\n");
    const titleIndex = generatedLines.findIndex(
      (line) => /^#\s+/.test(line)
    );
    if (titleIndex === -1) {
      return `${generatedContent.trimEnd()}

${section}
`;
    }
    let insertAt = titleIndex + 1;
    while (insertAt < generatedLines.length && generatedLines[insertAt].trim() === "") {
      insertAt++;
    }
    generatedLines.splice(
      insertAt,
      0,
      "",
      ...section.split("\n"),
      ""
    );
    return `${generatedLines.join("\n")}
`;
  }
  async addCrossReferenceToMaster(file, crossTarget, crossName) {
    const content = await this.app.vault.read(file);
    const lines = content.split("\n");
    const linkLine = `- [[${crossTarget}|${crossName}]]`;
    const headingIndex = lines.findIndex(
      (line) => line.trim() === "## Cross references"
    );
    if (headingIndex === -1) {
      const titleIndex = lines.findIndex(
        (line) => /^#\s+/.test(line)
      );
      if (titleIndex === -1) {
        const suffix = content.endsWith("\n") ? "" : "\n";
        await this.app.vault.modify(
          file,
          `${content}${suffix}
## Cross references

${linkLine}
`
        );
        return;
      }
      lines.splice(
        titleIndex + 1,
        0,
        "",
        "## Cross references",
        "",
        linkLine
      );
      await this.app.vault.modify(file, lines.join("\n"));
      return;
    }
    const nextHeading = lines.findIndex(
      (line, index) => index > headingIndex && /^##\s+/.test(line)
    );
    const sectionEnd = nextHeading === -1 ? lines.length : nextHeading;
    if (lines.slice(headingIndex, sectionEnd).some((line) => line.includes(`[[${crossTarget}|`))) {
      return;
    }
    const updatedLines = [...lines];
    let insertAt = sectionEnd;
    while (insertAt > headingIndex && updatedLines[insertAt - 1].trim() === "") {
      insertAt--;
    }
    updatedLines.splice(insertAt, 0, linkLine, "");
    await this.app.vault.modify(
      file,
      updatedLines.join("\n")
    );
  }
  mergeMasterSections(existingContent, currentSections) {
    const existingSections = this.extractMasterSections(existingContent);
    const currentByKey = /* @__PURE__ */ new Map();
    for (const section of currentSections) {
      const key = this.getMasterSectionKey(section);
      if (key) {
        currentByKey.set(key, section);
      }
    }
    const merged = [];
    const seenKeys = /* @__PURE__ */ new Set();
    for (const existingSection of existingSections) {
      const key = this.getMasterSectionKey(existingSection);
      const currentSection = key ? currentByKey.get(key) : void 0;
      if (key && seenKeys.has(key)) {
        continue;
      }
      if (key && currentSection) {
        merged.push(
          this.mergeMasterSection(
            existingSection,
            currentSection
          )
        );
        seenKeys.add(key);
        continue;
      }
      merged.push(existingSection);
      if (key) {
        seenKeys.add(key);
      }
    }
    for (const currentSection of currentSections) {
      const key = this.getMasterSectionKey(currentSection);
      if (!key || !seenKeys.has(key)) {
        merged.push(currentSection);
        if (key) {
          seenKeys.add(key);
        }
      }
    }
    return merged;
  }
  extractMasterSections(content) {
    const referencesHeading = content.indexOf("## References");
    if (referencesHeading === -1) {
      return [];
    }
    const body = content.slice(
      referencesHeading + "## References".length
    ).trim();
    if (!body || body === "_No references found._") {
      return [];
    }
    return body.split(/\n{2,}(?=###\s+\[\[)/).filter(
      (section) => /^###\s+\[\[/.test(section)
    );
  }
  getMasterSectionKey(section) {
    var _a, _b;
    return (_b = (_a = section.match(
      /^###\s+\[\[([^|\]]+)/
    )) == null ? void 0 : _a[1]) != null ? _b : "";
  }
  mergeMasterSection(existingSection, currentSection) {
    const currentLines = currentSection.split("\n");
    const mergedLines = [currentLines[0]];
    const seenReferenceLinks = /* @__PURE__ */ new Set();
    const appendReferenceBlocks = (section) => {
      const lines = section.split("\n");
      for (let index = 1; index < lines.length; index++) {
        const referenceMatch = lines[index].match(
          /^-\s+\[\[([^|\]]+)/
        );
        if (!referenceMatch) {
          continue;
        }
        const link = referenceMatch[1];
        if (seenReferenceLinks.has(link)) {
          continue;
        }
        seenReferenceLinks.add(link);
        mergedLines.push(lines[index]);
        if (index + 1 < lines.length && /^\s+>/.test(lines[index + 1])) {
          mergedLines.push(lines[index + 1]);
          index++;
        }
      }
    };
    appendReferenceBlocks(existingSection);
    appendReferenceBlocks(currentSection);
    return mergedLines.join("\n");
  }
  async ensureReferenceTargets(file, concept, masterPath, changeLog) {
    var _a, _b;
    const original = await this.app.vault.read(file);
    const lines = original.split("\n");
    const escapedConcept = this.escapeRegex(concept);
    const conceptRegex = new RegExp(escapedConcept, "gi");
    const protectedContent = this.getProtectedContent(lines);
    let changed = false;
    const changeEntries = [];
    const references = [];
    const seenLinks = /* @__PURE__ */ new Set();
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      if (protectedContent.protectedLines.has(index)) {
        continue;
      }
      const protectedRanges = (_a = protectedContent.excludedConceptRangesByLine.get(index)) != null ? _a : [];
      if (!this.hasUnprotectedMatch(
        line,
        conceptRegex,
        protectedRanges
      )) {
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
      let blockId = (_b = existingIdMatch == null ? void 0 : existingIdMatch[1]) != null ? _b : "";
      let created = false;
      if (!blockId) {
        blockId = this.makeStableBlockId(
          file.path,
          line,
          index
        );
        lines[index] = `${line.replace(/\s+$/, "")} ^${blockId}`;
        changed = true;
        created = true;
      }
      if (created || /^(?:citag-|ci-)/i.test(blockId)) {
        const content = `^${blockId}`;
        const wasCreatedByPlugin = created || changeLog.entries.some(
          (entry) => entry.type === "identifier" && entry.document === file.path && entry.content === content && entry.created
        );
        changeEntries.push({
          type: "identifier",
          document: file.path,
          content,
          masterPages: [masterPath],
          created: wasCreatedByPlugin
        });
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
    if (changed || changeEntries.length > 0) {
      await this.modifyDocumentWithChangeLog(
        file,
        original,
        lines.join("\n"),
        changeEntries,
        changeLog
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
    return "citag-" + (hash >>> 0).toString(36);
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
    const lines = text.split("\n");
    const protectedContent = this.getProtectedContent(lines);
    let count = 0;
    for (let index = 0; index < lines.length; index++) {
      if (protectedContent.protectedLines.has(index)) {
        continue;
      }
      const excludedConceptRanges = (_a = protectedContent.excludedConceptRangesByLine.get(index)) != null ? _a : [];
      for (const match of lines[index].matchAll(regex)) {
        const start = (_b = match.index) != null ? _b : 0;
        const end = start + match[0].length;
        if (!this.isRangeProtected(
          start,
          end,
          excludedConceptRanges
        )) {
          count++;
        }
      }
    }
    return count;
  }
  onunload() {
    console.log("Concept Indexer unloaded");
  }
};
