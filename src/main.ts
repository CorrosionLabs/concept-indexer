import {
	App,
	ItemView,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
	TFile,
	WorkspaceLeaf
} from "obsidian";

const VIEW_TYPE_CONCEPT_INDEXER = "concept-indexer-view";
const DEFAULT_MASTER_FOLDER_NAME = "Concept Indexer";
const DEFAULT_GLOBAL_INDEX_FILE_NAME = "Concept Index.md";

type LanguageCode = "en" | "es" | "fr" | "de" | "pt-BR" | "pl" | "ja" | "zh-CN";

const TRANSLATIONS = {
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
		useSelection: "Usar selección",
		scope: "Ámbito",
		allVault: "Todo el vault",
		allVaultDesc: "Incluye todos los archivos Markdown del vault.",
		processing: "Procesamiento",
		together: "Conjunto",
		togetherDesc: "Trata las carpetas seleccionadas como un único corpus.",
		separate: "Separado",
		separateDesc: "Analiza cada carpeta seleccionada como un corpus independiente.",
		options: "Opciones de procesamiento",
		createLinks: "Crear wikilinks",
		createMaster: "Crear/actualizar página maestra",
		createIndex: "Crear/actualizar índice global de conceptos",
		addHashtag: "Añadir hashtag",
		process: "Procesar concepto",
		enterConcept: "Introduce un concepto.",
		selectFolder: "Selecciona al menos una carpeta.",
		noSelection: "Selecciona primero texto en una nota abierta.",
		ready: "Selecciona un ámbito y busca un concepto.",
		noMatches: "No se encontraron coincidencias.",
		notes: "Notas",
		occurrences: "Apariciones",
		entireVaultGroup: "Todo el vault",
		openCommand: "Abrir Indexador de conceptos",
		openMaster: "Abrir página maestra",
		openIndex: "Abrir índice global",
		searchFirst: "Busca el concepto antes de procesarlo.",
		nothingEnabled: "Activa al menos una opción de procesamiento.",
		cancel: "Cancelar",
		confirm: "Procesar",
		confirmProcessing: "Confirmar procesamiento",
		filesFound: "Archivos encontrados",
		occurrencesFound: "Apariciones encontradas",
		processingComplete: "Procesamiento completado",
		filesModified: "Archivos modificados",
		wikilinksCreated: "Wikilinks creados",
		hashtagsAdded: "Hashtags añadidos",
		masterPagesCreated: "Páginas maestras creadas",
		masterPagesUpdated: "Páginas maestras actualizadas",
		globalIndexesCreated: "Índices globales creados",
		globalIndexesUpdated: "Índices globales actualizados",
		processingFailed: "El procesamiento ha fallado. Revisa la consola de desarrollador.",
		starting: "Iniciando...",
		processingFiles: "Procesando archivos...",
		updatingMasters: "Actualizando páginas maestras...",
		updatingIndex: "Actualizando índice global...",
		searching: "Buscando...",
		searchingEntireVault: "Buscando en todo el vault...",
		searchingSelectedScope: "Buscando en el ámbito seleccionado...",
		searchingConcept: "Buscando concepto...",
		processingConcept: "Procesando concepto...",
		processingButton: "Procesando...",
		exampleConcept: "Ejemplo: Corrosion Labs",
		collapseExpandScope: "Plegar / desplegar ámbito",
		linksShort: "Enlaces",
		masterShort: "Maestra",
		hashtagShort: "Hashtag",
		multipleMasters: "Existen varias páginas maestras separadas. Ábrelas desde los grupos de resultados o cambia a Conjunto.",
		masterMissing: "La página maestra todavía no existe.",
		multipleIndexes: "Existen varios índices separados. Abre el Concept Index.md deseado desde su carpeta.",
		indexMissing: "El índice global todavía no existe.",
		settingsTitle: "Indexador de conceptos",
		language: "Idioma",
		languageDesc: "Idioma de la interfaz del panel y de los ajustes del plugin.",
		masterFolder: "Carpeta de páginas maestras",
		masterFolderDesc: "Carpeta usada para guardar las páginas maestras de conceptos.",
		indexFilename: "Nombre del índice global",
		indexFilenameDesc: "Nombre de archivo usado para el índice de conceptos.",
		ignoredFolders: "Carpetas ignoradas",
		ignoredFoldersDesc: "Una carpeta relativa al vault por línea. Sus subcarpetas se ignoran automáticamente."
	},
	fr: {
		title: "Indexeur de concepts",
		concept: "Concept",
		search: "Rechercher",
		useSelection: "Utiliser la sélection",
		scope: "Portée",
		allVault: "Tout le vault",
		allVaultDesc: "Inclut tous les fichiers Markdown du vault.",
		processing: "Traitement",
		together: "Ensemble",
		togetherDesc: "Traite les dossiers sélectionnés comme un seul corpus.",
		separate: "Séparé",
		separateDesc: "Analyse chaque dossier sélectionné comme un corpus indépendant.",
		options: "Options de traitement",
		createLinks: "Créer les wikilinks",
		createMaster: "Créer/mettre à jour la page maître",
		createIndex: "Créer/mettre à jour l’index global des concepts",
		addHashtag: "Ajouter un hashtag",
		process: "Traiter le concept",
		enterConcept: "Saisissez un concept.",
		selectFolder: "Sélectionnez au moins un dossier.",
		noSelection: "Sélectionnez d’abord du texte dans une note ouverte.",
		ready: "Sélectionnez une portée et recherchez un concept.",
		noMatches: "Aucune correspondance trouvée.",
		notes: "Notes",
		occurrences: "Occurrences",
		entireVaultGroup: "Tout le vault",
		openCommand: "Ouvrir Indexeur de concepts",
		openMaster: "Ouvrir la page maître",
		openIndex: "Ouvrir l’index global",
		searchFirst: "Recherchez le concept avant de le traiter.",
		nothingEnabled: "Activez au moins une option de traitement.",
		cancel: "Annuler",
		confirm: "Traiter",
		confirmProcessing: "Confirmer le traitement",
		filesFound: "Fichiers trouvés",
		occurrencesFound: "Occurrences trouvées",
		processingComplete: "Traitement terminé",
		filesModified: "Fichiers modifiés",
		wikilinksCreated: "Wikilinks créés",
		hashtagsAdded: "Hashtags ajoutés",
		masterPagesCreated: "Pages maître créées",
		masterPagesUpdated: "Pages maître mises à jour",
		globalIndexesCreated: "Index globaux créés",
		globalIndexesUpdated: "Index globaux mis à jour",
		processingFailed: "Le traitement a échoué. Consultez la console développeur.",
		starting: "Démarrage...",
		processingFiles: "Traitement des fichiers...",
		updatingMasters: "Mise à jour des pages maître...",
		updatingIndex: "Mise à jour de l’index global...",
		searching: "Recherche...",
		searchingEntireVault: "Recherche dans tout le vault...",
		searchingSelectedScope: "Recherche dans la portée sélectionnée...",
		searchingConcept: "Recherche du concept...",
		processingConcept: "Traitement du concept...",
		processingButton: "Traitement...",
		exampleConcept: "Exemple : Corrosion Labs",
		collapseExpandScope: "Réduire / développer la portée",
		linksShort: "Liens",
		masterShort: "Maître",
		hashtagShort: "Hashtag",
		multipleMasters: "Plusieurs pages maître séparées existent. Ouvrez-les depuis les groupes de résultats ou passez en mode Ensemble.",
		masterMissing: "La page maître n’existe pas encore.",
		multipleIndexes: "Plusieurs index séparés existent. Ouvrez le Concept Index.md souhaité depuis son dossier.",
		indexMissing: "L’index global n’existe pas encore.",
		settingsTitle: "Indexeur de concepts",
		language: "Langue",
		languageDesc: "Langue de l’interface du panneau et des réglages du plugin.",
		masterFolder: "Dossier des pages maître",
		masterFolderDesc: "Dossier utilisé pour stocker les pages maître des concepts.",
		indexFilename: "Nom du fichier d’index global",
		indexFilenameDesc: "Nom de fichier utilisé pour l’index des concepts.",
		ignoredFolders: "Dossiers ignorés",
		ignoredFoldersDesc: "Un dossier relatif au vault par ligne. Les sous-dossiers sont ignorés automatiquement."
	},
	"pt-BR": {
		title: "Indexador de Conceitos",
		concept: "Conceito",
		search: "Buscar",
		useSelection: "Usar seleção",
		scope: "Escopo",
		allVault: "Vault inteiro",
		allVaultDesc: "Inclui todos os arquivos Markdown do vault.",
		processing: "Processamento",
		together: "Conjunto",
		togetherDesc: "Trata as pastas selecionadas como um único corpus.",
		separate: "Separado",
		separateDesc: "Analisa cada pasta selecionada como um corpus independente.",
		options: "Opções de processamento",
		createLinks: "Criar wikilinks",
		createMaster: "Criar/atualizar página mestra",
		createIndex: "Criar/atualizar índice global de conceitos",
		addHashtag: "Adicionar hashtag",
		process: "Processar conceito",
		enterConcept: "Digite um conceito.",
		selectFolder: "Selecione pelo menos uma pasta.",
		noSelection: "Selecione primeiro um texto em uma nota aberta.",
		ready: "Selecione um escopo e pesquise um conceito.",
		noMatches: "Nenhuma ocorrência encontrada.",
		notes: "Notas",
		occurrences: "Ocorrências",
		entireVaultGroup: "Vault inteiro",
		openCommand: "Abrir Indexador de Conceitos",
		openMaster: "Abrir página mestra",
		openIndex: "Abrir índice global",
		searchFirst: "Pesquise o conceito antes de processá-lo.",
		nothingEnabled: "Ative pelo menos uma opção de processamento.",
		cancel: "Cancelar",
		confirm: "Processar",
		confirmProcessing: "Confirmar processamento",
		filesFound: "Arquivos encontrados",
		occurrencesFound: "Ocorrências encontradas",
		processingComplete: "Processamento concluído",
		filesModified: "Arquivos modificados",
		wikilinksCreated: "Wikilinks criados",
		hashtagsAdded: "Hashtags adicionadas",
		masterPagesCreated: "Páginas mestras criadas",
		masterPagesUpdated: "Páginas mestras atualizadas",
		globalIndexesCreated: "Índices globais criados",
		globalIndexesUpdated: "Índices globais atualizados",
		processingFailed: "O processamento falhou. Verifique o console do desenvolvedor.",
		starting: "Iniciando...",
		processingFiles: "Processando arquivos...",
		updatingMasters: "Atualizando páginas mestras...",
		updatingIndex: "Atualizando índice global...",
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
		multipleMasters: "Existem várias páginas mestras separadas. Abra-as pelos grupos de resultados ou altere para Conjunto.",
		masterMissing: "A página mestra ainda não existe.",
		multipleIndexes: "Existem vários índices separados. Abra o Concept Index.md desejado na pasta correspondente.",
		indexMissing: "O índice global de conceitos ainda não existe.",
		settingsTitle: "Indexador de Conceitos",
		language: "Idioma",
		languageDesc: "Idioma da interface do painel e das configurações do plugin.",
		masterFolder: "Pasta das páginas mestras",
		masterFolderDesc: "Pasta usada para armazenar as páginas mestras dos conceitos.",
		indexFilename: "Nome do arquivo do índice global",
		indexFilenameDesc: "Nome do arquivo usado para o índice de conceitos.",
		ignoredFolders: "Pastas ignoradas",
		ignoredFoldersDesc: "Uma pasta relativa ao vault por linha. As subpastas também são ignoradas automaticamente."
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
		togetherDesc: "Die ausgewählten Ordner als einen gemeinsamen Korpus behandeln.",
		separate: "Getrennt",
		separateDesc: "Jeden ausgewählten Ordner als eigenen Korpus analysieren.",
		options: "Verarbeitungsoptionen",
		createLinks: "Wikilinks erstellen",
		createMaster: "Masterseite erstellen/aktualisieren",
		createIndex: "Globalen Konzeptindex erstellen/aktualisieren",
		addHashtag: "Hashtag hinzufügen",
		process: "Konzept verarbeiten",
		enterConcept: "Geben Sie ein Konzept ein.",
		selectFolder: "Wählen Sie mindestens einen Ordner aus.",
		noSelection: "Wählen Sie zuerst Text in einer geöffneten Notiz aus.",
		ready: "Wählen Sie einen Bereich und suchen Sie nach einem Konzept.",
		noMatches: "Keine Treffer gefunden.",
		notes: "Notizen",
		occurrences: "Vorkommen",
		entireVaultGroup: "Gesamter Vault",
		openCommand: "Konzept-Indexer öffnen",
		openMaster: "Masterseite öffnen",
		openIndex: "Globalen Index öffnen",
		searchFirst: "Suchen Sie zuerst nach dem Konzept, bevor Sie es verarbeiten.",
		nothingEnabled: "Aktivieren Sie mindestens eine Verarbeitungsoption.",
		cancel: "Abbrechen",
		confirm: "Verarbeiten",
		confirmProcessing: "Verarbeitung bestätigen",
		filesFound: "Gefundene Dateien",
		occurrencesFound: "Gefundene Vorkommen",
		processingComplete: "Verarbeitung abgeschlossen",
		filesModified: "Geänderte Dateien",
		wikilinksCreated: "Erstellte Wikilinks",
		hashtagsAdded: "Hinzugefügte Hashtags",
		masterPagesCreated: "Erstellte Masterseiten",
		masterPagesUpdated: "Aktualisierte Masterseiten",
		globalIndexesCreated: "Erstellte globale Indizes",
		globalIndexesUpdated: "Aktualisierte globale Indizes",
		processingFailed: "Verarbeitung fehlgeschlagen. Prüfen Sie die Entwicklerkonsole.",
		starting: "Startet...",
		processingFiles: "Dateien werden verarbeitet...",
		updatingMasters: "Masterseiten werden aktualisiert...",
		updatingIndex: "Globaler Index wird aktualisiert...",
		searching: "Suche...",
		searchingEntireVault: "Gesamter Vault wird durchsucht...",
		searchingSelectedScope: "Ausgewählter Bereich wird durchsucht...",
		searchingConcept: "Konzept wird gesucht...",
		processingConcept: "Konzept wird verarbeitet...",
		processingButton: "Verarbeitung...",
		exampleConcept: "Beispiel: Corrosion Labs",
		collapseExpandScope: "Bereich ein-/ausklappen",
		linksShort: "Links",
		masterShort: "Master",
		hashtagShort: "Hashtag",
		multipleMasters: "Es existieren mehrere getrennte Masterseiten. Öffnen Sie sie über die Ergebnisgruppen oder wechseln Sie zu „Zusammen“.",
		masterMissing: "Die Masterseite existiert noch nicht.",
		multipleIndexes: "Es existieren mehrere getrennte Indizes. Öffnen Sie die gewünschte Concept Index.md im entsprechenden Ordner.",
		indexMissing: "Der globale Konzeptindex existiert noch nicht.",
		settingsTitle: "Konzept-Indexer",
		language: "Sprache",
		languageDesc: "Sprache der Benutzeroberfläche und der Plugin-Einstellungen.",
		masterFolder: "Ordner für Masterseiten",
		masterFolderDesc: "Ordner zum Speichern der Masterseiten für Konzepte.",
		indexFilename: "Dateiname des globalen Index",
		indexFilenameDesc: "Dateiname für den Konzeptindex.",
		ignoredFolders: "Ignorierte Ordner",
		ignoredFoldersDesc: "Ein Vault-relativer Ordner pro Zeile. Unterordner werden automatisch ebenfalls ignoriert."
	},
	pl: {
		title: "Indeksator pojęć",
		concept: "Pojęcie",
		search: "Szukaj",
		useSelection: "Użyj zaznaczenia",
		scope: "Zakres",
		allVault: "Cały vault",
		allVaultDesc: "Uwzględnia wszystkie pliki Markdown w vault.",
		processing: "Przetwarzanie",
		together: "Razem",
		togetherDesc: "Traktuje wybrane foldery jako jeden wspólny korpus.",
		separate: "Osobno",
		separateDesc: "Analizuje każdy wybrany folder jako niezależny korpus.",
		options: "Opcje przetwarzania",
		createLinks: "Twórz wikilinki",
		createMaster: "Utwórz/aktualizuj stronę główną",
		createIndex: "Utwórz/aktualizuj globalny indeks pojęć",
		addHashtag: "Dodaj hashtag",
		process: "Przetwórz pojęcie",
		enterConcept: "Wprowadź pojęcie.",
		selectFolder: "Wybierz co najmniej jeden folder.",
		noSelection: "Najpierw zaznacz tekst w otwartej notatce.",
		ready: "Wybierz zakres i wyszukaj pojęcie.",
		noMatches: "Nie znaleziono dopasowań.",
		notes: "Notatki",
		occurrences: "Wystąpienia",
		entireVaultGroup: "Cały vault",
		openCommand: "Otwórz Indeksator pojęć",
		openMaster: "Otwórz stronę główną",
		openIndex: "Otwórz globalny indeks",
		searchFirst: "Najpierw wyszukaj pojęcie, zanim je przetworzysz.",
		nothingEnabled: "Włącz co najmniej jedną opcję przetwarzania.",
		cancel: "Anuluj",
		confirm: "Przetwórz",
		confirmProcessing: "Potwierdź przetwarzanie",
		filesFound: "Znalezione pliki",
		occurrencesFound: "Znalezione wystąpienia",
		processingComplete: "Przetwarzanie zakończone",
		filesModified: "Zmodyfikowane pliki",
		wikilinksCreated: "Utworzone wikilinki",
		hashtagsAdded: "Dodane hashtagi",
		masterPagesCreated: "Utworzone strony główne",
		masterPagesUpdated: "Zaktualizowane strony główne",
		globalIndexesCreated: "Utworzone globalne indeksy",
		globalIndexesUpdated: "Zaktualizowane globalne indeksy",
		processingFailed: "Przetwarzanie nie powiodło się. Sprawdź konsolę deweloperską.",
		starting: "Uruchamianie...",
		processingFiles: "Przetwarzanie plików...",
		updatingMasters: "Aktualizowanie stron głównych...",
		updatingIndex: "Aktualizowanie globalnego indeksu...",
		searching: "Wyszukiwanie...",
		searchingEntireVault: "Przeszukiwanie całego vault...",
		searchingSelectedScope: "Przeszukiwanie wybranego zakresu...",
		searchingConcept: "Wyszukiwanie pojęcia...",
		processingConcept: "Przetwarzanie pojęcia...",
		processingButton: "Przetwarzanie...",
		exampleConcept: "Przykład: Corrosion Labs",
		collapseExpandScope: "Zwiń / rozwiń zakres",
		linksShort: "Linki",
		masterShort: "Główna",
		hashtagShort: "Hashtag",
		multipleMasters: "Istnieje kilka oddzielnych stron głównych. Otwórz je z grup wyników albo przełącz tryb na Razem.",
		masterMissing: "Strona główna jeszcze nie istnieje.",
		multipleIndexes: "Istnieje kilka oddzielnych indeksów. Otwórz odpowiedni plik Concept Index.md z właściwego folderu.",
		indexMissing: "Globalny indeks pojęć jeszcze nie istnieje.",
		settingsTitle: "Indeksator pojęć",
		language: "Język",
		languageDesc: "Język interfejsu panelu i ustawień wtyczki.",
		masterFolder: "Folder stron głównych",
		masterFolderDesc: "Folder używany do przechowywania stron głównych pojęć.",
		indexFilename: "Nazwa pliku globalnego indeksu",
		indexFilenameDesc: "Nazwa pliku używanego jako indeks pojęć.",
		ignoredFolders: "Ignorowane foldery",
		ignoredFoldersDesc: "Jeden folder względny względem vault na linię. Podfoldery są ignorowane automatycznie."
	},
	ja: {
		title: "コンセプトインデクサー",
		concept: "コンセプト",
		search: "検索",
		useSelection: "選択範囲を使用",
		scope: "対象範囲",
		allVault: "Vault 全体",
		allVaultDesc: "Vault 内のすべての Markdown ファイルを対象にします。",
		processing: "処理",
		together: "まとめて処理",
		togetherDesc: "選択したフォルダーを1つのコーパスとして扱います。",
		separate: "個別に処理",
		separateDesc: "選択した各フォルダーを独立したコーパスとして解析します。",
		options: "処理オプション",
		createLinks: "Wikilink を作成",
		createMaster: "マスターページを作成 / 更新",
		createIndex: "グローバルコンセプトインデックスを作成 / 更新",
		addHashtag: "ハッシュタグを追加",
		process: "コンセプトを処理",
		enterConcept: "コンセプトを入力してください。",
		selectFolder: "少なくとも1つのフォルダーを選択してください。",
		noSelection: "先に開いているノート内のテキストを選択してください。",
		ready: "対象範囲を選択してコンセプトを検索してください。",
		noMatches: "一致する項目が見つかりませんでした。",
		notes: "ノート",
		occurrences: "出現数",
		entireVaultGroup: "Vault 全体",
		openCommand: "コンセプトインデクサーを開く",
		openMaster: "マスターページを開く",
		openIndex: "グローバルインデックスを開く",
		searchFirst: "処理する前にコンセプトを検索してください。",
		nothingEnabled: "少なくとも1つの処理オプションを有効にしてください。",
		cancel: "キャンセル",
		confirm: "処理",
		confirmProcessing: "処理を確認",
		filesFound: "見つかったファイル",
		occurrencesFound: "見つかった出現箇所",
		processingComplete: "処理が完了しました",
		filesModified: "変更されたファイル",
		wikilinksCreated: "作成された Wikilink",
		hashtagsAdded: "追加されたハッシュタグ",
		masterPagesCreated: "作成されたマスターページ",
		masterPagesUpdated: "更新されたマスターページ",
		globalIndexesCreated: "作成されたグローバルインデックス",
		globalIndexesUpdated: "更新されたグローバルインデックス",
		processingFailed: "処理に失敗しました。開発者コンソールを確認してください。",
		starting: "開始しています...",
		processingFiles: "ファイルを処理しています...",
		updatingMasters: "マスターページを更新しています...",
		updatingIndex: "グローバルインデックスを更新しています...",
		searching: "検索中...",
		searchingEntireVault: "Vault 全体を検索しています...",
		searchingSelectedScope: "選択した対象範囲を検索しています...",
		searchingConcept: "コンセプトを検索しています...",
		processingConcept: "コンセプトを処理しています...",
		processingButton: "処理中...",
		exampleConcept: "例: Corrosion Labs",
		collapseExpandScope: "対象範囲を折りたたむ / 展開する",
		linksShort: "リンク",
		masterShort: "マスター",
		hashtagShort: "ハッシュタグ",
		multipleMasters: "複数の個別マスターページがあります。結果グループから開くか、「まとめて処理」に切り替えてください。",
		masterMissing: "マスターページはまだ存在しません。",
		multipleIndexes: "複数の個別インデックスがあります。該当フォルダーから目的の Concept Index.md を開いてください。",
		indexMissing: "グローバルコンセプトインデックスはまだ存在しません。",
		settingsTitle: "コンセプトインデクサー",
		language: "言語",
		languageDesc: "パネルとプラグイン設定の表示言語です。",
		masterFolder: "マスターページ用フォルダー",
		masterFolderDesc: "コンセプトのマスターページを保存するフォルダーです。",
		indexFilename: "グローバルインデックスのファイル名",
		indexFilenameDesc: "コンセプトインデックスに使用するファイル名です。",
		ignoredFolders: "無視するフォルダー",
		ignoredFoldersDesc: "Vault 相対パスのフォルダーを1行に1つ入力します。サブフォルダーも自動的に無視されます。"
	},
	"zh-CN": {
		title: "概念索引器",
		concept: "概念",
		search: "搜索",
		useSelection: "使用所选内容",
		scope: "范围",
		allVault: "整个 Vault",
		allVaultDesc: "包含 Vault 中的所有 Markdown 文件。",
		processing: "处理",
		together: "合并处理",
		togetherDesc: "将所选文件夹作为一个整体语料库处理。",
		separate: "分别处理",
		separateDesc: "将每个所选文件夹作为独立语料库进行分析。",
		options: "处理选项",
		createLinks: "创建 Wikilink",
		createMaster: "创建/更新主页面",
		createIndex: "创建/更新全局概念索引",
		addHashtag: "添加标签",
		process: "处理概念",
		enterConcept: "请输入概念。",
		selectFolder: "请至少选择一个文件夹。",
		noSelection: "请先在打开的笔记中选择文本。",
		ready: "请选择范围并搜索一个概念。",
		noMatches: "未找到匹配项。",
		notes: "笔记",
		occurrences: "出现次数",
		entireVaultGroup: "整个 Vault",
		openCommand: "打开概念索引器",
		openMaster: "打开主页面",
		openIndex: "打开全局索引",
		searchFirst: "请先搜索概念，然后再进行处理。",
		nothingEnabled: "请至少启用一个处理选项。",
		cancel: "取消",
		confirm: "处理",
		confirmProcessing: "确认处理",
		filesFound: "找到的文件",
		occurrencesFound: "找到的出现次数",
		processingComplete: "处理完成",
		filesModified: "已修改文件",
		wikilinksCreated: "已创建的 Wikilink",
		hashtagsAdded: "已添加的标签",
		masterPagesCreated: "已创建的主页面",
		masterPagesUpdated: "已更新的主页面",
		globalIndexesCreated: "已创建的全局索引",
		globalIndexesUpdated: "已更新的全局索引",
		processingFailed: "处理失败。请检查开发者控制台。",
		starting: "正在启动...",
		processingFiles: "正在处理文件...",
		updatingMasters: "正在更新主页面...",
		updatingIndex: "正在更新全局索引...",
		searching: "正在搜索...",
		searchingEntireVault: "正在搜索整个 Vault...",
		searchingSelectedScope: "正在搜索所选范围...",
		searchingConcept: "正在搜索概念...",
		processingConcept: "正在处理概念...",
		processingButton: "处理中...",
		exampleConcept: "示例：Corrosion Labs",
		collapseExpandScope: "折叠 / 展开范围",
		linksShort: "链接",
		masterShort: "主页面",
		hashtagShort: "标签",
		multipleMasters: "存在多个独立主页面。请从结果组中打开，或切换到“合并处理”。",
		masterMissing: "主页面尚不存在。",
		multipleIndexes: "存在多个独立索引。请从对应文件夹中打开所需的 Concept Index.md。",
		indexMissing: "全局概念索引尚不存在。",
		settingsTitle: "概念索引器",
		language: "语言",
		languageDesc: "面板和插件设置的界面语言。",
		masterFolder: "主页面文件夹",
		masterFolderDesc: "用于保存概念主页面的文件夹。",
		indexFilename: "全局索引文件名",
		indexFilenameDesc: "用于概念索引的文件名。",
		ignoredFolders: "忽略的文件夹",
		ignoredFoldersDesc: "每行输入一个相对于 Vault 的文件夹路径。其子文件夹也会自动忽略。"
	},
} as const;

type TranslationKey = keyof typeof TRANSLATIONS.en;


type SearchResult = {
	file: TFile;
	occurrences: number;
};

type ReferenceTarget = {
	label: string;
	link: string;
	excerpt?: string;
};

type ProcessingMode = "together" | "separate";

type SearchGroup = {
	name: string;
	folders: string[] | null;
	results: SearchResult[];
};

type FolderNode = {
	path: string;
	name: string;
	children: FolderNode[];
};

type ProcessOptions = {
	createLinks: boolean;
	createMaster: boolean;
	addHashtag: boolean;
};

type ProcessSummary = {
	filesModified: number;
	wikilinksCreated: number;
	hashtagsAdded: number;
	masterPagesCreated: number;
	masterPagesUpdated: number;
	globalIndexesCreated: number;
	globalIndexesUpdated: number;
};

type ProgressUpdate = {
	phase: string;
	current: number;
	total: number;
};

type PersistedUiState = {
	concept: string;
	scopeAll: boolean;
	selectedFolders: string[];
	processingMode: ProcessingMode;
	createLinks: boolean;
	createMaster: boolean;
	addHashtag: boolean;
	scopeCollapsed: boolean;
};

type PluginSettings = {
	language: LanguageCode;
	masterFolder: string;
	globalIndexFileName: string;
	ignoredFolders: string[];
};

type PluginData = {
	ui: PersistedUiState;
	settings: PluginSettings;
};

const DEFAULT_DATA: PluginData = {
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

class ConfirmProcessModal extends Modal {
	private plugin: ConceptIndexerPlugin;
	private concept: string;
	private groups: SearchGroup[];
	private options: ProcessOptions;
	private onConfirm: () => void;

	constructor(
		plugin: ConceptIndexerPlugin,
		concept: string,
		groups: SearchGroup[],
		options: ProcessOptions,
		onConfirm: () => void
	) {
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
			this.groups.flatMap((group) =>
				group.results.map((result) => result.file.path)
			)
		).size;

		const totalOccurrences = this.groups.reduce(
			(sum, group) =>
				sum +
				group.results.reduce(
					(groupSum, result) =>
						groupSum + result.occurrences,
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
			text:
				`${this.plugin.t("filesFound")}: ${totalFiles} · ` +
				`${this.plugin.t("occurrencesFound")}: ${totalOccurrences}`
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

		new Setting(contentEl)
			.addButton((button) => {
				button
					.setButtonText(this.plugin.t("cancel"))
					.onClick(() => this.close());
			})
			.addButton((button) => {
				button
					.setButtonText(this.plugin.t("confirm"))
					.setCta()
					.onClick(() => {
						this.close();
						this.onConfirm();
					});
			});
	}

	onClose() {
		this.contentEl.empty();
	}
}

class ConceptIndexerView extends ItemView {
	private plugin: ConceptIndexerPlugin;

	private concept = "";
	private scopeAll = true;
	private selectedFolders = new Set<string>();
	private processingMode: ProcessingMode = "together";
	private groups: SearchGroup[] = [];
	private expandedFolders = new Set<string>();

	private createLinks = true;
	private createMaster = true;
	private addHashtag = false;

	private isProcessing = false;
	private progressPhase = "";
	private progressCurrent = 0;
	private progressTotal = 0;

	private isSearching = false;
	private searchPhase = "";
	private searchCurrent = 0;
	private searchTotal = 0;

	private scopeCollapsed = false;

	constructor(
		leaf: WorkspaceLeaf,
		plugin: ConceptIndexerPlugin
	) {
		super(leaf);
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

	getViewType(): string {
		return VIEW_TYPE_CONCEPT_INDEXER;
	}

	getDisplayText(): string {
		return this.plugin.t("title");
	}

	getIcon(): string {
		return "list-restart";
	}

	async onOpen() {
		this.initializeExpandedFolders();
		this.render();
	}

	private persistUiState() {
		void this.plugin.updateUiState({
			concept: this.concept,
			scopeAll: this.scopeAll,
			selectedFolders:
				Array.from(this.selectedFolders),
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

	private initializeExpandedFolders() {
		const tree = this.buildFolderTree();

		for (const node of tree) {
			if (node.children.length > 0) {
				this.expandedFolders.add(node.path);
			}
		}
	}

	private buildFolderTree(): FolderNode[] {
		const folderPaths = new Set<string>();

		for (const file of this.app.vault.getMarkdownFiles()) {
			if (
				this.plugin.isMasterPage(file.path) ||
				this.plugin.isIgnoredPath(file.path)
			) {
				continue;
			}

			const parts = file.path.split("/");

			if (parts.length <= 1) {
				continue;
			}

			parts.pop();

			let currentPath = "";

			for (const part of parts) {
				currentPath = currentPath
					? `${currentPath}/${part}`
					: part;

				if (
					this.plugin.isMasterFolderPath(currentPath) ||
					this.plugin.isIgnoredPath(currentPath)
				) {
					break;
				}

				folderPaths.add(currentPath);
			}
		}

		const nodeMap = new Map<string, FolderNode>();

		for (const path of folderPaths) {
			const parts = path.split("/");
			const name = parts[parts.length - 1];

			nodeMap.set(path, {
				path,
				name,
				children: []
			});
		}

		const roots: FolderNode[] = [];

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

		const sortNodes = (nodes: FolderNode[]) => {
			nodes.sort((a, b) => a.name.localeCompare(b.name));

			for (const node of nodes) {
				sortNodes(node.children);
			}
		};

		sortNodes(roots);

		return roots;
	}

	private getSelectedFolderList(): string[] {
		return Array.from(this.selectedFolders).sort((a, b) =>
			a.localeCompare(b)
		);
	}

	private toggleFolderSelection(
		folderPath: string,
		selected: boolean
	) {
		if (selected) {
			for (const existing of Array.from(this.selectedFolders)) {
				if (existing.startsWith(`${folderPath}/`)) {
					this.selectedFolders.delete(existing);
				}
			}

			const hasSelectedAncestor = Array.from(
				this.selectedFolders
			).some((existing) =>
				folderPath.startsWith(`${existing}/`)
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

	private renderFolderTree(
		container: HTMLElement,
		nodes: FolderNode[],
		depth = 0
	) {
		for (const node of nodes) {
			const row = container.createDiv({
				cls: "concept-indexer-folder-row"
			});

			const hasChildren = node.children.length > 0;

			const expander = row.createSpan({
				cls: "concept-indexer-folder-expander",
				text: hasChildren
					? this.expandedFolders.has(node.path)
						? "▾"
						: "▸"
					: ""
			});

			if (hasChildren) {
				expander.addClass(
					"concept-indexer-folder-expander-clickable"
				);
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
			).some((folder) =>
				node.path.startsWith(`${folder}/`)
			);

			checkbox.checked =
				this.scopeAll ||
				this.selectedFolders.has(node.path) ||
				selectedByAncestor;

			checkbox.disabled =
				this.scopeAll || selectedByAncestor;

			checkbox.addEventListener("change", () => {
				this.toggleFolderSelection(
					node.path,
					checkbox.checked
				);
			});

			const label = row.createSpan({
				cls: "concept-indexer-folder-label",
				text: node.name
			});

			label.addEventListener("click", () => {
				if (
					this.scopeAll ||
					selectedByAncestor
				) {
					return;
				}

				this.toggleFolderSelection(
					node.path,
					!this.selectedFolders.has(node.path)
				);
			});

			if (
				hasChildren &&
				this.expandedFolders.has(node.path)
			) {
				const children =
					container.createDiv({
						cls: "concept-indexer-folder-children"
					});

				this.renderFolderTree(
					children,
					node.children,
					depth + 1
				);
			}
		}
	}

	private getEditorSelection(): string {
		return this.plugin.getEditorSelection();
	}

	private async runSearchFromView(concept: string) {
		if (!concept) {
			new Notice(this.plugin.t("enterConcept"));
			return;
		}

		if (
			!this.scopeAll &&
			this.selectedFolders.size === 0
		) {
			new Notice(this.plugin.t("selectFolder"));
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
				const results =
					await this.plugin.searchConcept(
						concept,
						null,
						(progress) => {
							this.searchPhase = this.plugin.t("searchingEntireVault");
							this.searchCurrent = progress.current;
							this.searchTotal = progress.total;

							if (
								progress.current === progress.total ||
								progress.current % 10 === 0
							) {
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

			if (
				this.processingMode === "separate" &&
				folders.length > 1
			) {
				const groups: SearchGroup[] = [];

				for (const folder of folders) {
					const results =
						await this.plugin.searchConcept(
							concept,
							[folder],
							(progress) => {
								this.searchPhase =
									`Searching: ${folder}`;
								this.searchCurrent = progress.current;
								this.searchTotal = progress.total;

								if (
									progress.current === progress.total ||
									progress.current % 10 === 0
								) {
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
				const results =
					await this.plugin.searchConcept(
						concept,
						folders,
						(progress) => {
							this.searchPhase = this.plugin.t("searchingSelectedScope");
							this.searchCurrent = progress.current;
							this.searchTotal = progress.total;

							if (
								progress.current === progress.total ||
								progress.current % 10 === 0
							) {
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

	private processConcept() {
		if (!this.concept || this.groups.length === 0) {
			new Notice(this.plugin.t("searchFirst"));
			return;
		}

		const options: ProcessOptions = {
			createLinks: this.createLinks,
			createMaster: this.createMaster,
			addHashtag: this.addHashtag
		};

		if (
			!options.createLinks &&
			!options.createMaster &&
			!options.addHashtag
		) {
			new Notice(this.plugin.t("nothingEnabled"));
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

	private async runProcessing(options: ProcessOptions) {
		this.isProcessing = true;
		this.progressPhase = this.plugin.t("starting");
		this.progressCurrent = 0;
		this.progressTotal = 0;
		this.render();

		try {
			const summary =
				await this.plugin.processConcept(
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

			new Notice(
				`${this.plugin.t("processingComplete")}\n` +
					`${this.plugin.t("filesModified")}: ${summary.filesModified}\n` +
					`${this.plugin.t("wikilinksCreated")}: ${summary.wikilinksCreated}\n` +
					`${this.plugin.t("hashtagsAdded")}: ${summary.hashtagsAdded}\n` +
					`${this.plugin.t("masterPagesCreated")}: ${summary.masterPagesCreated}\n` +
					`${this.plugin.t("masterPagesUpdated")}: ${summary.masterPagesUpdated}\n` +
					`${this.plugin.t("globalIndexesCreated")}: ${summary.globalIndexesCreated}\n` +
					`${this.plugin.t("globalIndexesUpdated")}: ${summary.globalIndexesUpdated}`,
				10000
			);

			await this.runSearchFromView(this.concept);
		} catch (error) {
			console.error(
				"[Concept Indexer] Processing failed",
				error
			);

			new Notice(
				this.plugin.t("processingFailed"),
				8000
			);
		} finally {
			this.isProcessing = false;
			this.progressPhase = "";
			this.progressCurrent = 0;
			this.progressTotal = 0;
			this.render();
		}
	}

	private render() {
		const container =
			this.containerEl.children[1] as HTMLElement;

		container.empty();
		container.addClass("concept-indexer-container");

		container.createEl("h3", {
			cls: "concept-indexer-title",
			text: this.plugin.t("title")
		});

		let conceptInput = this.concept;

		const conceptRow = container.createDiv({
			cls: "concept-indexer-concept-row"
		});

		const input = conceptRow.createEl("input", {
			cls: "concept-indexer-concept-input",
			type: "text",
			placeholder: this.plugin.t("exampleConcept")
		});
		input.value = this.concept;

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
			const selected =
				this.getEditorSelection();

			if (!selected) {
				new Notice(this.plugin.t("noSelection"));
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
		searchButton.disabled =
			this.isSearching || this.isProcessing;

		searchButton.addEventListener("click", () => {
			void this.runSearchFromView(
				conceptInput
			);
		});

		if (this.isSearching) {
			const box = container.createDiv({
				cls: "concept-indexer-search-progress-box"
			});

			box.createSpan({
				text:
					`${this.searchPhase} ` +
					(this.searchTotal > 0
						? `${this.searchCurrent}/${this.searchTotal}`
						: "")
			});

			if (this.searchTotal > 0) {
				const progress = box.createEl("progress", {
					cls: "concept-indexer-progress"
				});
				progress.max = this.searchTotal;
				progress.value = this.searchCurrent;
			}
		}

		const scopeHeader = container.createDiv({
			cls: "concept-indexer-scope-header"
		});

		scopeHeader.createEl("strong", {
			text: this.plugin.t("scope")
		});

		const scopeToggle = scopeHeader.createEl("button", {
			text: this.scopeCollapsed ? "▸" : "▾"
		});
		scopeToggle.addClass("concept-indexer-scope-toggle");
		scopeToggle.title = this.plugin.t("collapseExpandScope");

		scopeToggle.addEventListener("click", () => {
			this.scopeCollapsed =
				!this.scopeCollapsed;

			this.persistUiState();
			this.render();
		});

		if (!this.scopeCollapsed) {
			const allVaultRow =
				container.createDiv({
					cls: "concept-indexer-all-vault-row"
				});

			const allVaultCheckbox =
				allVaultRow.createEl("input", {
					type: "checkbox"
				});

			allVaultCheckbox.checked =
				this.scopeAll;

			allVaultCheckbox.addEventListener(
				"change",
				() => {
					this.scopeAll =
						allVaultCheckbox.checked;

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

			const folderTree =
				container.createDiv({
					cls: "concept-indexer-folder-tree"
				});

			this.renderFolderTree(
				folderTree,
				this.buildFolderTree()
			);

			if (
				!this.scopeAll &&
				this.selectedFolders.size > 1
			) {
				const modeRow =
					container.createDiv({
						cls: "concept-indexer-mode-row"
					});

				modeRow.createSpan({
					text: `${this.plugin.t("processing")}:`
				});

				const togetherLabel =
					modeRow.createEl("label");

				const togetherRadio =
					togetherLabel.createEl("input", {
						type: "radio"
					});

				togetherRadio.name =
					"concept-indexer-mode";

				togetherRadio.checked =
					this.processingMode === "together";

				togetherRadio.addEventListener(
					"change",
					() => {
						if (togetherRadio.checked) {
							this.processingMode =
								"together";

							this.groups = [];
							this.persistUiState();
							this.render();
						}
					}
				);

				togetherLabel.appendText(
					` ${this.plugin.t("together")}`
				);

				const separateLabel =
					modeRow.createEl("label");

				const separateRadio =
					separateLabel.createEl("input", {
						type: "radio"
					});

				separateRadio.name =
					"concept-indexer-mode";

				separateRadio.checked =
					this.processingMode === "separate";

				separateRadio.addEventListener(
					"change",
					() => {
						if (separateRadio.checked) {
							this.processingMode =
								"separate";

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

		container.createEl("strong", {
			cls: "concept-indexer-options-header",
			text: this.plugin.t("options")
		});

		const optionsRow =
			container.createDiv({
				cls: "concept-indexer-options-row"
			});

		const addOption = (
			labelText: string,
			value: boolean,
			onChange: (value: boolean) => void
		) => {
			const label =
				optionsRow.createEl("label");

			const checkbox =
				label.createEl("input", {
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
			const box = container.createDiv({
				cls: "concept-indexer-processing-progress-box"
			});

			box.createSpan({
				text:
					`${this.progressPhase} ` +
					(this.progressTotal > 0
						? `${this.progressCurrent}/${this.progressTotal}`
						: "")
			});

			if (this.progressTotal > 0) {
				const progress = box.createEl("progress", {
					cls: "concept-indexer-progress"
				});
				progress.max = this.progressTotal;
				progress.value = this.progressCurrent;
			}
		}

		if (this.groups.length > 0) {
			const topProcessRow =
				container.createDiv({
					cls: "concept-indexer-top-process-row"
				});

			const button =
				topProcessRow.createEl("button", {
					text: this.isProcessing
						? this.plugin.t("processingButton")
						: this.plugin.t("process")
				});

			button.addClass("mod-cta");
			button.addClass("concept-indexer-full-width-button");
			button.disabled =
				this.isProcessing ||
				this.isSearching;

			button.addEventListener(
				"click",
				() => {
					if (
						!this.isProcessing &&
						!this.isSearching
					) {
						this.processConcept();
					}
				}
			);
		}

		if (this.groups.length > 0) {
			const accessRow =
				container.createDiv({
					cls: "concept-indexer-access-row"
				});

			const masterButton =
				accessRow.createEl("button", {
					cls: "concept-indexer-access-button",
					text: this.plugin.t("openMaster")
				});

			masterButton.addEventListener(
				"click",
				() => {
					void this.plugin.openCurrentMasterPage(
						this.concept,
						this.groups
					);
				}
			);

			const indexButton =
				accessRow.createEl("button", {
					cls: "concept-indexer-access-button",
					text: this.plugin.t("openIndex")
				});

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
			container.createEl("p", {
				cls: "concept-indexer-ready",
				text: this.plugin.t("ready")
			});
			return;
		}

		const totalNotes = new Set(
			this.groups.flatMap((group) =>
				group.results.map(
					(result) =>
						result.file.path
				)
			)
		).size;

		const totalOccurrences =
			this.groups.reduce(
				(sum, group) =>
					sum +
					group.results.reduce(
						(groupSum, item) =>
							groupSum +
							item.occurrences,
						0
					),
				0
			);

		const resultHeader =
			container.createDiv({
				cls: "concept-indexer-result-header"
			});

		resultHeader.createEl("strong", {
			text: this.concept
		});

		resultHeader.createEl("div", {
			cls: "concept-indexer-result-summary",
			text:
				`${totalNotes} notes · ` +
				`${totalOccurrences} occurrences`
		});

		for (const group of this.groups) {
			if (
				this.processingMode ===
					"separate" &&
				this.groups.length > 1
			) {
				const groupOccurrences =
					group.results.reduce(
						(sum, item) =>
							sum +
							item.occurrences,
						0
					);

				container.createEl("div", {
					cls: "concept-indexer-group-title",
					text:
						`${group.name} · ` +
						`${group.results.length} notes · ` +
						`${groupOccurrences} occurrences`
				});
			}

			if (group.results.length === 0) {
				container.createEl("p", {
					cls: "concept-indexer-empty",
					text: this.plugin.t("noMatches")
				});

				continue;
			}

			const list =
				container.createEl("ul", {
					cls: "concept-indexer-result-list"
				});

			for (const result of group.results) {
				const item =
					list.createEl("li", {
						cls: "concept-indexer-result-item"
					});

				const link =
					item.createEl("a", {
						text:
							result.file.path,
						href: "#"
					});

				link.addEventListener(
					"click",
					(event) => {
						event.preventDefault();

						void this.app.workspace
							.getLeaf(false)
							.openFile(
								result.file
							);
					}
				);

				item.appendText(
					` — ${result.occurrences}`
				);
			}
		}

		const bottomProcessRow =
			container.createDiv({
				cls: "concept-indexer-bottom-process-row"
			});

		const bottomButton =
			bottomProcessRow.createEl(
				"button",
				{
					text: this.isProcessing
						? this.plugin.t("processingButton")
						: this.plugin.t("process")
				}
			);

		bottomButton.addClass("mod-cta");
		bottomButton.addClass("concept-indexer-full-width-button");
		bottomButton.disabled =
			this.isProcessing ||
			this.isSearching;

		bottomButton.addEventListener(
			"click",
			() => {
				if (
					!this.isProcessing &&
					!this.isSearching
				) {
					this.processConcept();
				}
			}
		);
	}

}

class ConceptIndexerSettingTab extends PluginSettingTab {
	private plugin: ConceptIndexerPlugin;

	constructor(
		app: App,
		plugin: ConceptIndexerPlugin
	) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName(this.plugin.t("settingsTitle"))
			.setHeading();

		const settings =
			this.plugin.getSettings();

		new Setting(containerEl)
			.setName(this.plugin.t("language"))
			.setDesc(this.plugin.t("languageDesc"))
			.addDropdown((dropdown) => {
				dropdown
					.addOption("en", "English")
					.addOption("es", "Español")
					.addOption("fr", "Français")
					.addOption("de", "Deutsch")
					.addOption("pt-BR", "Português (Brasil)")
					.addOption("pl", "Polski")
					.addOption("ja", "日本語")
					.addOption("zh-CN", "简体中文")
					.setValue(settings.language)
					.onChange(async (value) => {
						settings.language =
							value as LanguageCode;

						await this.plugin.updateSettings(
							settings
						);

						this.display();
						this.plugin.refreshViews();
					});
			});

		new Setting(containerEl)
			.setName(this.plugin.t("masterFolder"))
			.setDesc(
				this.plugin.t("masterFolderDesc")
			)
			.addText((text) => {
				text
					.setPlaceholder(
						DEFAULT_MASTER_FOLDER_NAME
					)
					.setValue(
						settings.masterFolder
					)
					.onChange(async (value) => {
						settings.masterFolder =
							value.trim() ||
							DEFAULT_MASTER_FOLDER_NAME;

						await this.plugin.updateSettings(
							settings
						);
					});
			});

		new Setting(containerEl)
			.setName(this.plugin.t("indexFilename"))
			.setDesc(
				this.plugin.t("indexFilenameDesc")
			)
			.addText((text) => {
				text
					.setPlaceholder(
						DEFAULT_GLOBAL_INDEX_FILE_NAME
					)
					.setValue(
						settings.globalIndexFileName
					)
					.onChange(async (value) => {
						settings.globalIndexFileName =
							value.trim() ||
							DEFAULT_GLOBAL_INDEX_FILE_NAME;

						await this.plugin.updateSettings(
							settings
						);
					});
			});

		new Setting(containerEl)
			.setName(this.plugin.t("ignoredFolders"))
			.setDesc(
				this.plugin.t("ignoredFoldersDesc")
			)
			.addTextArea((area) => {
				area
					.setPlaceholder(
						"Templates\nArchive\nExports"
					)
					.setValue(
						settings.ignoredFolders.join(
							"\n"
						)
					)
					.onChange(async (value) => {
						settings.ignoredFolders =
							value
								.split(/\r?\n/)
								.map((item) =>
									item.trim()
								)
								.filter(Boolean);

						await this.plugin.updateSettings(
							settings
						);
					});

				area.inputEl.rows = 6;
			});
	}
}

export default class ConceptIndexerPlugin extends Plugin {
	private lastMarkdownView: MarkdownView | null = null;
	private data: PluginData = structuredClone(
		DEFAULT_DATA
	);

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
			(leaf) =>
				new ConceptIndexerView(
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

	private async loadPluginData() {
		const loaded =
			(await this.loadData()) as Partial<PluginData> | null;

		this.data = {
			ui: {
				...DEFAULT_DATA.ui,
				...(loaded?.ui ?? {})
			},
			settings: {
				...DEFAULT_DATA.settings,
				...(loaded?.settings ?? {}),
				language:
					(loaded?.settings?.language as LanguageCode | undefined) ??
					DEFAULT_DATA.settings.language,
				ignoredFolders:
					loaded?.settings?.ignoredFolders ??
					DEFAULT_DATA.settings.ignoredFolders
			}
		};
	}

	getUiState(): PersistedUiState {
		return {
			...this.data.ui,
			selectedFolders: [
				...this.data.ui.selectedFolders
			]
		};
	}

	async updateUiState(
		state: PersistedUiState
	) {
		this.data.ui = {
			...state,
			selectedFolders: [
				...state.selectedFolders
			]
		};

		await this.saveData(this.data);
	}

	t(
		key: TranslationKey
	): string {
		const language =
			this.data.settings.language;

		return (
			TRANSLATIONS[language]?.[key] ??
			TRANSLATIONS.en[key]
		);
	}

	getSettings(): PluginSettings {
		return {
			...this.data.settings,
			ignoredFolders: [
				...this.data.settings.ignoredFolders
			]
		};
	}

	async updateSettings(
		settings: PluginSettings
	) {
		this.data.settings = {
			...settings,
			ignoredFolders: [
				...settings.ignoredFolders
			]
		};

		await this.saveData(this.data);
	}

	getMasterFolderName(): string {
		return (
			this.data.settings.masterFolder.trim() ||
			DEFAULT_MASTER_FOLDER_NAME
		);
	}

	getGlobalIndexFileName(): string {
		const value =
			this.data.settings.globalIndexFileName.trim() ||
			DEFAULT_GLOBAL_INDEX_FILE_NAME;

		return value.toLowerCase().endsWith(".md")
			? value
			: `${value}.md`;
	}

	isMasterFolderPath(path: string): boolean {
		const masterFolder =
			this.getMasterFolderName();

		return (
			path === masterFolder ||
			path.endsWith(`/${masterFolder}`)
		);
	}

	isIgnoredPath(path: string): boolean {
		const normalized =
			path.replace(/\\/g, "/");

		return this.data.settings.ignoredFolders.some(
			(folder) => {
				const clean =
					folder
						.trim()
						.replace(/^\/+|\/+$/g, "");

				if (!clean) {
					return false;
				}

				return (
					normalized === clean ||
					normalized.startsWith(
						`${clean}/`
					)
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

	private captureActiveMarkdownView() {
		const view =
			this.app.workspace.getActiveViewOfType(
				MarkdownView
			);

		if (view) {
			this.lastMarkdownView = view;
		}
	}

	getEditorSelection(): string {
		const activeView =
			this.app.workspace.getActiveViewOfType(
				MarkdownView
			);

		if (activeView) {
			this.lastMarkdownView = activeView;
		}

		return (
			this.lastMarkdownView?.editor
				.getSelection()
				.trim() ?? ""
		);
	}

	private async activateView() {
		const leaf = this.getOrCreateRightLeaf();

		await leaf.setViewState({
			type: VIEW_TYPE_CONCEPT_INDEXER,
			active: true
		});

		this.app.workspace.revealLeaf(leaf);
	}

	private getOrCreateRightLeaf(): WorkspaceLeaf {
		const existingLeaves =
			this.app.workspace.getLeavesOfType(
				VIEW_TYPE_CONCEPT_INDEXER
			);

		if (existingLeaves.length > 0) {
			return existingLeaves[0];
		}

		const leaf =
			this.app.workspace.getRightLeaf(false);

		if (!leaf) {
			throw new Error(
				"Could not create the right sidebar pane."
			);
		}

		return leaf;
	}

	isMasterPage(path: string): boolean {
		const masterFolder =
			this.getMasterFolderName();

		return (
			path.startsWith(`${masterFolder}/`) ||
			path.includes(`/${masterFolder}/`)
		);
	}

	async searchConcept(
		concept: string,
		folders: string[] | null,
		onProgress?: (progress: ProgressUpdate) => void
	): Promise<SearchResult[]> {
		let markdownFiles =
			this.app.vault
				.getMarkdownFiles()
				.filter(
					(file) =>
						!this.isMasterPage(file.path) &&
						!this.isIgnoredPath(file.path)
				);

		if (folders) {
			markdownFiles = markdownFiles.filter(
				(file) =>
					folders.some(
						(folder) =>
							file.path.startsWith(
								`${folder}/`
							)
					)
			);
		}

		const results: SearchResult[] = [];

		let current = 0;

		onProgress?.({
			phase: "Searching...",
			current: 0,
			total: markdownFiles.length
		});

		for (const file of markdownFiles) {
			const content =
				await this.app.vault.cachedRead(
					file
				);

			const occurrences =
				this.countOccurrences(
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

			onProgress?.({
				phase: "Searching...",
				current,
				total: markdownFiles.length
			});
		}

		results.sort(
			(a, b) =>
				b.occurrences - a.occurrences
		);

		return results;
	}

	async processConcept(
		concept: string,
		groups: SearchGroup[],
		options: ProcessOptions,
		onProgress?: (progress: ProgressUpdate) => void
	): Promise<ProcessSummary> {
		const summary: ProcessSummary = {
			filesModified: 0,
			wikilinksCreated: 0,
			hashtagsAdded: 0,
			masterPagesCreated: 0,
			masterPagesUpdated: 0,
			globalIndexesCreated: 0,
			globalIndexesUpdated: 0
		};

		const hashtag =
			this.normalizeHashtag(concept);

		const masterTargets = new Map<
			string,
			{
				group: SearchGroup;
				path: string;
			}
		>();

		for (const group of groups) {
			if (options.createMaster) {
				const masterPath =
					this.getMasterPagePath(
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

		const modifiedFiles = new Set<string>();

		const processFiles = groups.flatMap(
			(group) => group.results
		);

		let processedFiles = 0;

		onProgress?.({
			phase: "Processing files...",
			current: 0,
			total: processFiles.length
		});

		for (const group of groups) {
			const masterPath =
				masterTargets.get(group.name)?.path ??
				this.getMasterPagePath(
					concept,
					group,
					groups.length
				);

			for (const result of group.results) {
				const file = result.file;

				if (this.isMasterPage(file.path)) {
					continue;
				}

				const original =
					await this.app.vault.read(file);

				let updated = original;
				let fileChanged = false;

				if (options.createLinks) {
					const replacement =
						this.replaceConceptSafely(
							updated,
							concept,
							this.makeWikilinkTarget(
								masterPath,
								concept
							)
						);

					updated = replacement.text;

					if (replacement.count > 0) {
						summary.wikilinksCreated +=
							replacement.count;

						fileChanged = true;
					}
				}

				if (options.addHashtag) {
					const hashtagResult =
						this.addHashtagIfMissing(
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

				onProgress?.({
					phase: "Processing files...",
					current: processedFiles,
					total: processFiles.length
				});
			}
		}

		summary.filesModified =
			modifiedFiles.size;

		if (options.createMaster) {
			const indexFolders = new Set<string>();

			const masterTargetList =
				Array.from(masterTargets.values());

			let masterCurrent = 0;

			onProgress?.({
				phase: "Updating master pages...",
				current: 0,
				total: masterTargetList.length
			});

			for (const target of masterTargetList) {
				const status =
					await this.createOrUpdateMasterPage(
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

				onProgress?.({
					phase: "Updating master pages...",
					current: masterCurrent,
					total: masterTargetList.length
				});
			}

			const indexFolderList =
				Array.from(indexFolders);

			let indexCurrent = 0;

			onProgress?.({
				phase: "Updating global index...",
				current: 0,
				total: indexFolderList.length
			});

			for (const folderPath of indexFolderList) {
				const indexStatus =
					await this.createOrUpdateGlobalIndex(
						folderPath
					);

				if (indexStatus === "created") {
					summary.globalIndexesCreated++;
				} else {
					summary.globalIndexesUpdated++;
				}

				indexCurrent++;

				onProgress?.({
					phase: "Updating global index...",
					current: indexCurrent,
					total: indexFolderList.length
				});
			}
		}

		return summary;
	}

	private getParentFolder(path: string): string {
		const slashIndex = path.lastIndexOf("/");

		if (slashIndex === -1) {
			return "";
		}

		return path.substring(0, slashIndex);
	}

	private async createOrUpdateGlobalIndex(
		folderPath: string
	): Promise<"created" | "updated"> {
		await this.ensureFolder(folderPath);

		const prefix = folderPath
			? `${folderPath}/`
			: "";

		const indexPath =
			`${prefix}${this.getGlobalIndexFileName()}`;

		const masterFiles =
			this.app.vault
				.getMarkdownFiles()
				.filter((file) => {
					if (file.path === indexPath) {
						return false;
					}

					const parent =
						this.getParentFolder(file.path);

					return parent === folderPath;
				});

		const entries: Array<{
			concept: string;
			path: string;
			notes: number;
		}> = [];

		for (const file of masterFiles) {
			const content =
				await this.app.vault.read(file);

			const headingMatch =
				content.match(/^#\s+(.+)$/m);

			const concept =
				headingMatch?.[1]?.trim() ||
				file.basename;

			const notes =
				(content.match(/^### \[\[/gm) ?? [])
					.length;

			entries.push({
				concept,
				path: file.path.replace(/\.md$/i, ""),
				notes
			});
		}

		entries.sort((a, b) =>
			a.concept.localeCompare(
				b.concept,
				undefined,
				{ sensitivity: "base" }
			)
		);

		const lines = entries.map(
			(entry) =>
				`- [[${entry.path}|${entry.concept}]]` +
					` — ${entry.notes} ` +
					`${entry.notes === 1 ? "note" : "notes"}`
		);

		const content =
			`# Concept Index\n\n` +
			`## Concepts\n\n` +
			`${lines.join("\n") || "_No concepts indexed._"}\n`;

		const existing =
			this.app.vault.getAbstractFileByPath(
				indexPath
			);

		if (existing instanceof TFile) {
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

	async openCurrentMasterPage(
		concept: string,
		groups: SearchGroup[]
	) {
		if (!concept || groups.length === 0) {
			new Notice(this.t("searchFirst"));
			return;
		}

		if (groups.length > 1) {
			new Notice(
				this.t("multipleMasters")
			);
			return;
		}

		const masterPath =
			this.getMasterPagePath(
				concept,
				groups[0],
				groups.length
			);

		const file =
			this.app.vault.getAbstractFileByPath(
				masterPath
			);

		if (!(file instanceof TFile)) {
			new Notice(
				this.t("masterMissing")
			);
			return;
		}

		await this.app.workspace
			.getLeaf(false)
			.openFile(file);
	}

	async openCurrentGlobalIndex(
		concept: string,
		groups: SearchGroup[]
	) {
		if (!concept || groups.length === 0) {
			new Notice(this.t("searchFirst"));
			return;
		}

		if (groups.length > 1) {
			new Notice(
				this.t("multipleIndexes")
			);
			return;
		}

		const masterPath =
			this.getMasterPagePath(
				concept,
				groups[0],
				groups.length
			);

		const folderPath =
			this.getParentFolder(
				masterPath
			);

		const prefix = folderPath
			? `${folderPath}/`
			: "";

		const indexPath =
			`${prefix}${this.getGlobalIndexFileName()}`;

		const file =
			this.app.vault.getAbstractFileByPath(
				indexPath
			);

		if (!(file instanceof TFile)) {
			new Notice(
				this.t("indexMissing")
			);
			return;
		}

		await this.app.workspace
			.getLeaf(false)
			.openFile(file);
	}

	private getMasterPagePath(
		concept: string,
		group: SearchGroup,
		totalGroups: number
	): string {
		const safeName =
			this.sanitizeFileName(concept);

		if (group.folders === null) {
			return `${this.getMasterFolderName()}/${safeName}.md`;
		}

		if (totalGroups > 1 && group.folders.length === 1) {
			return (
				`${group.folders[0]}/` +
				`${this.getMasterFolderName()}/${safeName}.md`
			);
		}

		if (group.folders.length === 1) {
			return (
				`${group.folders[0]}/` +
				`${this.getMasterFolderName()}/${safeName}.md`
			);
		}

		return `${this.getMasterFolderName()}/${safeName}.md`;
	}

	private makeWikilinkTarget(
		masterPath: string,
		displayText: string
	): string {
		const withoutExtension =
			masterPath.replace(/\.md$/i, "");

		return `[[${withoutExtension}|${displayText}]]`;
	}

	private replaceConceptSafely(
		text: string,
		concept: string,
		wikilink: string
	): {
		text: string;
		count: number;
	} {
		const escaped =
			this.escapeRegex(concept);

		const regex =
			new RegExp(escaped, "gi");

		const lines = text.split("\n");

		let inFrontmatter = false;
		let inFence = false;
		let fenceMarker = "";
		let count = 0;

		const output = lines.map((line, index) => {
			const trimmed = line.trim();

			if (index === 0 && trimmed === "---") {
				inFrontmatter = true;
				return line;
			}

			if (
				inFrontmatter &&
				trimmed === "---"
			) {
				inFrontmatter = false;
				return line;
			}

			if (inFrontmatter) {
				return line;
			}

			const fenceMatch =
				trimmed.match(/^(```+|~~~+)/);

			if (fenceMatch) {
				const marker =
					fenceMatch[1][0];

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

			const protectedRanges =
				this.getProtectedRanges(line);

			let lastIndex = 0;
			let rebuilt = "";

			for (const match of line.matchAll(regex)) {
				const start = match.index ?? 0;
				const end = start + match[0].length;

				if (
					protectedRanges.some(
						(range) =>
							start >= range.start &&
							end <= range.end
					)
				) {
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

	private getProtectedRanges(
		line: string
	): Array<{
		start: number;
		end: number;
	}> {
		const ranges: Array<{
			start: number;
			end: number;
		}> = [];

		const patterns = [
			/\[\[[^\]]*?\]\]/g,
			/`[^`]*`/g,
			/\[[^\]]*?\]\([^)]+?\)/g
		];

		for (const pattern of patterns) {
			for (const match of line.matchAll(pattern)) {
				const start = match.index ?? 0;

				ranges.push({
					start,
					end: start + match[0].length
				});
			}
		}

		return ranges;
	}

	private addHashtagIfMissing(
		text: string,
		hashtag: string
	): {
		text: string;
		added: boolean;
	} {
		if (!hashtag) {
			return {
				text,
				added: false
			};
		}

		const escaped =
			this.escapeRegex(hashtag);

		const existingTagRegex =
			new RegExp(
				`(^|\\n)[ \\t]*#${escaped}[ \\t]*(?=\\n|$)`,
				"gi"
			);

		const hadExistingTag =
			existingTagRegex.test(text);

		const cleanedText = text
			.replace(
				new RegExp(
					`(^|\\n)[ \\t]*#${escaped}[ \\t]*(?=\\n|$)`,
					"gi"
				),
				"$1"
			)
			.replace(/\n{3,}/g, "\n\n");

		const tagLine = `#${hashtag}`;

		if (cleanedText.startsWith("---\n")) {
			const frontmatterEnd =
				cleanedText.indexOf("\n---", 4);

			if (frontmatterEnd !== -1) {
				const insertAt =
					frontmatterEnd + "\n---".length;

				const before =
					cleanedText.slice(0, insertAt);

				const after =
					cleanedText.slice(insertAt)
						.replace(/^\n*/, "");

				return {
					text:
						`${before}\n\n` +
						`${tagLine}\n\n` +
						after,
					added: !hadExistingTag
				};
			}
		}

		const cleanStart =
			cleanedText.replace(/^\n+/, "");

		return {
			text:
				`${tagLine}\n\n` +
				cleanStart,
			added: !hadExistingTag
		};
	}

	private async createOrUpdateMasterPage(
		concept: string,
		group: SearchGroup,
		masterPath: string
	): Promise<"created" | "updated"> {
		const folderPath =
			masterPath.substring(
				0,
				masterPath.lastIndexOf("/")
			);

		await this.ensureFolder(folderPath);

		const freshResults =
			await this.searchConcept(
				concept,
				group.folders
			);

		const sections: string[] = [];

		for (const result of freshResults) {
			if (
				result.file.path === masterPath ||
				this.isMasterPage(result.file.path)
			) {
				continue;
			}

			const references =
				await this.ensureReferenceTargets(
					result.file,
					concept
				);

			const fileTarget =
				result.file.path.replace(
					/\.md$/i,
					""
				);

			const sectionLines = [
				`### [[${fileTarget}|${result.file.basename}]]` +
					` — ${result.occurrences} ` +
					`${result.occurrences === 1 ? "occurrence" : "occurrences"}`
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

		const content =
			`# ${concept}\n\n` +
			`## References\n\n` +
			`${sections.join("\n\n") || "_No references found._"}\n`;

		const existing =
			this.app.vault.getAbstractFileByPath(
				masterPath
			);

		if (existing instanceof TFile) {
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

	private async ensureReferenceTargets(
		file: TFile,
		concept: string
	): Promise<ReferenceTarget[]> {
		const original =
			await this.app.vault.read(file);

		const lines = original.split("\n");
		const escapedConcept =
			this.escapeRegex(concept);
		const conceptRegex =
			new RegExp(escapedConcept, "i");

		let inFrontmatter = false;
		let inFence = false;
		let fenceMarker = "";
		let changed = false;

		const references: ReferenceTarget[] = [];
		const seenLinks = new Set<string>();

		for (let index = 0; index < lines.length; index++) {
			const line = lines[index];
			const trimmed = line.trim();

			if (index === 0 && trimmed === "---") {
				inFrontmatter = true;
				continue;
			}

			if (
				inFrontmatter &&
				trimmed === "---"
			) {
				inFrontmatter = false;
				continue;
			}

			if (inFrontmatter) {
				continue;
			}

			const fenceMatch =
				trimmed.match(/^(```+|~~~+)/);

			if (fenceMatch) {
				const marker =
					fenceMatch[1][0];

				if (!inFence) {
					inFence = true;
					fenceMarker = marker;
				} else if (marker === fenceMarker) {
					inFence = false;
					fenceMarker = "";
				}

				continue;
			}

			if (
				inFence ||
				!conceptRegex.test(line)
			) {
				continue;
			}

			const headingMatch =
				line.match(/^(#{1,6})\s+(.+?)\s*$/);

			if (headingMatch) {
				const heading =
					headingMatch[2]
						.replace(/\s+#+\s*$/, "")
						.trim();

				const target =
					`${file.path.replace(/\.md$/i, "")}` +
					`#${heading}`;

				if (!seenLinks.has(target)) {
					seenLinks.add(target);

					references.push({
						label: heading,
						link: target,
						excerpt:
							this.makeExcerpt(
								this.getParagraphText(
									lines,
									index
								)
							)
					});
				}

				continue;
			}

			if (
				this.isLikelyTableLine(line)
			) {
				const headingTarget =
					this.findNearestHeadingTarget(
						lines,
						index,
						file
					);

				if (
					headingTarget &&
					!seenLinks.has(
						headingTarget.link
					)
				) {
					seenLinks.add(
						headingTarget.link
					);

					references.push({
						...headingTarget,
						excerpt:
							this.makeExcerpt(
								this.getParagraphText(
									lines,
									index
								)
							)
					});
				}

				continue;
			}

			const existingIdMatch =
				line.match(
					/\s+\^([A-Za-z0-9-]+)\s*$/
				);

			let blockId =
				existingIdMatch?.[1] ?? "";

			if (!blockId) {
				blockId =
					this.makeStableBlockId(
						file.path,
						line,
						index
					);

				lines[index] =
					`${line.replace(/\s+$/, "")} ^${blockId}`;

				changed = true;
			}

			const target =
				`${file.path.replace(/\.md$/i, "")}` +
				`#^${blockId}`;

			if (!seenLinks.has(target)) {
				seenLinks.add(target);

				references.push({
					label: `Block ${references.length + 1}`,
					link: target,
					excerpt:
						this.makeExcerpt(
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

	private getParagraphText(
		lines: string[],
		lineIndex: number
	): string {
		let start = lineIndex;
		let end = lineIndex;

		while (
			start > 0 &&
			lines[start - 1].trim() !== "" &&
			!this.isStructuralBoundary(
				lines[start - 1]
			)
		) {
			start--;
		}

		while (
			end < lines.length - 1 &&
			lines[end + 1].trim() !== "" &&
			!this.isStructuralBoundary(
				lines[end + 1]
			)
		) {
			end++;
		}

		return lines
			.slice(start, end + 1)
			.join(" ")
			.replace(/\s+/g, " ")
			.trim();
	}

	private isStructuralBoundary(
		line: string
	): boolean {
		const trimmed = line.trim();

		return (
			/^#{1,6}\s+/.test(trimmed) ||
			/^(```+|~~~+)/.test(trimmed) ||
			this.isLikelyTableLine(line)
		);
	}

	private makeExcerpt(
		text: string,
		maxLength = 160
	): string {
		const cleaned = text
			.replace(
				/\[\[[^|\]]+\|([^\]]+)\]\]/g,
				"$1"
			)
			.replace(
				/\[\[([^\]]+)\]\]/g,
				"$1"
			)
			.replace(
				/\[([^\]]+)\]\([^)]+\)/g,
				"$1"
			)
			.replace(
				/\s+\^[A-Za-z0-9-]+\s*$/g,
				""
			)
			.replace(
				/[*_~`>#-]+/g,
				" "
			)
			.replace(/\s+/g, " ")
			.trim();

		if (cleaned.length <= maxLength) {
			return cleaned;
		}

		return (
			cleaned
				.slice(0, maxLength)
				.trimEnd() +
			"…"
		);
	}

	private findNearestHeadingTarget(
		lines: string[],
		fromIndex: number,
		file: TFile
	): ReferenceTarget | null {
		for (
			let index = fromIndex - 1;
			index >= 0;
			index--
		) {
			const match =
				lines[index].match(
					/^(#{1,6})\s+(.+?)\s*$/
				);

			if (!match) {
				continue;
			}

			const heading =
				match[2]
					.replace(/\s+#+\s*$/, "")
					.trim();

			return {
				label: heading,
				link:
					`${file.path.replace(/\.md$/i, "")}` +
					`#${heading}`
			};
		}

		return null;
	}

	private isLikelyTableLine(
		line: string
	): boolean {
		const trimmed = line.trim();

		return (
			trimmed.startsWith("|") &&
			trimmed.endsWith("|")
		);
	}

	private makeStableBlockId(
		filePath: string,
		line: string,
		lineIndex: number
	): string {
		const source =
			`${filePath}|${line.trim()}|${lineIndex}`;

		let hash = 2166136261;

		for (let index = 0; index < source.length; index++) {
			hash ^= source.charCodeAt(index);
			hash = Math.imul(
				hash,
				16777619
			);
		}

		return (
			"ci-" +
			(hash >>> 0)
				.toString(36)
		);
	}

	private async ensureFolder(
		path: string
	) {
		if (!path) {
			return;
		}

		const parts = path.split("/");
		let current = "";

		for (const part of parts) {
			current = current
				? `${current}/${part}`
				: part;

			if (
				!this.app.vault.getAbstractFileByPath(
					current
				)
			) {
				await this.app.vault.createFolder(
					current
				);
			}
		}
	}

	private normalizeHashtag(
		concept: string
	): string {
		return concept
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "");
	}

	private sanitizeFileName(
		concept: string
	): string {
		const sanitized = concept
			.replace(/[\\/:*?"<>|]/g, "-")
			.replace(/\s+/g, " ")
			.trim();

		return sanitized || "Untitled concept";
	}

	private escapeRegex(
		value: string
	): string {
		return value.replace(
			/[.*+?^${}()|[\]\\]/g,
			"\\$&"
		);
	}

	private countOccurrences(
		text: string,
		concept: string
	): number {
		const escapedConcept =
			this.escapeRegex(concept);

		const regex = new RegExp(
			escapedConcept,
			"gi"
		);

		return text.match(regex)?.length ?? 0;
	}

	onunload() {
		console.log("Concept Indexer unloaded");
	}
}
