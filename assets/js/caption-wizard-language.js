(function() {
	var translations = {
		en: {
			pageTitle: 'Caption Wizard - Project Portfolio',
			coverAlt: 'Caption Wizard interface cover',
			projectSummary: 'Local text transcription and translation software designed to support interpreters in their work by ensuring the quality of their interpretation and improving their performance, while maintaining the strictest confidentiality guidelines.',
			projectProperties: 'Project Properties',
			projectBeginning: 'Project beginning',
			projectType: 'Type of project',
			aiSolution: 'AI-powered software',
			projectState: 'Project state',
			functionalPrototype: 'Functional prototype',
			platforms: 'Platforms',
			tools: 'Tools',
			descriptionHeading: 'Description',
			desktopInterfaceAlt: 'Caption Wizard desktop interface',
			descriptionIntro: 'Caption Wizard is a desktop app for real-time speech transcription and translation that keeps all processing entirely on the device.',
			descriptionDetails: 'Designed with a strict focus on privacy, it uses local AI models to process audio directly on the device, without transmitting data to external servers, making it ideal for highly confidential environments such as medical or legal interpretation. It includes user interface (UI) component development, advanced audio capture services, and direct integration of inference models.',
			videoFallback: 'Your browser does not support the video tag.',
			videoCaption: 'Software use demonstration',
			operatingStages: 'Operating Stages',
			audioCapture: 'Audio capture',
			processing: 'Processing',
			userInterface: 'User Interface',
			audioCaptureDescription: "A specialized program continuously captures the device's audio output and breaks it down into one-second segments; it then runs a preprocessing algorithm to detect human speech. Positive results trigger the sending of the segment for further processing.",
			processingDescription: "Processing can be run on the user's device or on a dedicated server. The audio from the previous step is used to feed an AI model, which identifies its language and generates a transcription. The text then undergoes post-processing to clean it up, and then it is run through a translation model to generate text in the target language. The texts then go to the interface labelled with their corresponding language.",
			userInterfaceDescription: 'This is what the user sees. The interface receives the text and displays it in the corresponding place, breaking up the sentences and giving it formatting so it is easier for the brain to understand and process, allowing for quick and smooth reading.',
			additionalFeatures: 'Additional features',
			additionalToolsAlt: 'Caption Wizard additional tools',
			additionalFeaturesDescription: 'The interface includes a variety of additional tools that allow the interpreter to customize the application to their needs during the interpretation.',
			glossaryAlt: 'Translation glossary',
			glossaryDescription: 'The program includes a built-in translation glossary to provide specific equivalents for desired terms.',
			addTermAlt: 'Add glossary term dialog',
			addTermDescription: 'You have the option to add new terms and their equivalents at any time.',
			settingsAlt: 'Language and layout settings',
			settingsDescription: "It allows the user to change the languages being used and configure the layout to suit the user's preferences.",
			notepadAlt: 'Caption Wizard notepad',
			notepadDescription: 'It also includes a handy notepad for any quick notes you might need during the conversation.',
			otherProjects: 'Other Projects',
			collarMakerAlt: 'Collar maker machine',
			smartBlindsAlt: 'Smart blackout blinds'
		},
		es: {
			pageTitle: 'Caption Wizard - Portafolio de proyectos',
			coverAlt: 'Portada de la interfaz de Caption Wizard',
			projectSummary: 'Software local de transcripción y traducción de texto, diseñado para apoyar a intérpretes y mejorar la calidad de su trabajo con estrictas medidas de confidencialidad.',
			projectProperties: 'Propiedades del proyecto',
			projectBeginning: 'Fecha de inicio',
			projectType: 'Tipo de proyecto',
			aiSolution: 'Software potenciado por IA',
			projectState: 'Estado del proyecto',
			functionalPrototype: 'Prototipo funcional',
			platforms: 'Plataformas',
			tools: 'Herramientas',
			descriptionHeading: 'Descripción',
			desktopInterfaceAlt: 'Interfaz de escritorio de Caption Wizard',
			descriptionIntro: 'Caption Wizard es una aplicación de escritorio para transcripción y traducción de voz en tiempo real caracterizada por mantener todo el procesamiento en el dispositivo.',
			descriptionDetails: 'Diseñada con un enfoque estricto en la privacidad, utiliza modelos de IA locales para procesar el audio directamente en el dispositivo, sin enviar datos a servidores externos. Esto la hace ideal para entornos confidenciales, como la interpretación médica o legal. También incluye desarrollo de componentes de interfaz, servicios avanzados de captura de audio e integración directa de modelos de inferencia.',
			videoFallback: 'Tu navegador no admite la reproducción de este video.',
			videoCaption: 'Demostración del uso del software',
			operatingStages: 'Etapas de funcionamiento',
			audioCapture: 'Captura de audio',
			processing: 'Procesamiento',
			userInterface: 'Interfaz de usuario',
			audioCaptureDescription: 'Un programa especializado captura continuamente la salida de audio del dispositivo y la divide en segmentos de un segundo. Después, aplica un algoritmo de preprocesamiento para detectar voz humana. Si detecta voz, envía el segmento para su procesamiento.',
			processingDescription: 'El procesamiento puede ejecutarse en el dispositivo del usuario o en un servidor dedicado. El audio capturado alimenta un modelo de IA que identifica el idioma y genera una transcripción. El texto resultante se limpia mediante un posprocesamiento y pasa por un modelo de traducción para generar otro texto en el idioma de destino. Finalmente, los textos se envían a la interfaz con la etiqueta de su idioma correspondiente.',
			userInterfaceDescription: 'Esta es la parte que ve el usuario. La interfaz recibe el texto y lo muestra en el lugar correspondiente, divide las oraciones y les da formato para facilitar su comprensión y lectura.',
			additionalFeatures: 'Funciones adicionales',
			additionalToolsAlt: 'Herramientas adicionales de Caption Wizard',
			additionalFeaturesDescription: 'La interfaz incluye herramientas adicionales para que el intérprete adapte la aplicación a sus necesidades durante la interpretación.',
			glossaryAlt: 'Glosario de traducción',
			glossaryDescription: 'El programa incluye un glosario de traducciones para asignar equivalentes específicos a los términos que se necesiten.',
			addTermAlt: 'Diálogo para añadir un término al glosario',
			addTermDescription: 'Puedes añadir términos nuevos y sus equivalentes en cualquier momento.',
			settingsAlt: 'Configuración de idiomas y diseño',
			settingsDescription: 'Permite cambiar los idiomas y configurar el diseño según las preferencias del usuario.',
			notepadAlt: 'Bloc de notas de Caption Wizard',
			notepadDescription: 'También incluye un práctico bloc de notas para apuntar cualquier información durante la conversación.',
			otherProjects: 'Otros proyectos',
			collarMakerAlt: 'Máquina para fabricar collares',
			smartBlindsAlt: 'Persianas opacas inteligentes'
		}
	};

	var languageToggle = document.getElementById('languageToggle');
	var currentLanguage = 'en';

	try {
		var savedLanguage = localStorage.getItem('portfolio-language');
		if (savedLanguage === 'en' || savedLanguage === 'es')
			currentLanguage = savedLanguage;
	}
	catch (error) {
		console.warn('Unable to read the saved language preference.', error);
	}

	function applyLanguage(language) {
		var pageTranslations = translations[language];
		var textElements = document.querySelectorAll('[data-cw-i18n]');

		document.title = pageTranslations.pageTitle;
		document.documentElement.lang = language;

		for (var index = 0; index < textElements.length; index++) {
			var element = textElements[index];
			var key = element.getAttribute('data-cw-i18n');
			element.textContent = pageTranslations[key];
		}

		var altElements = document.querySelectorAll('[data-cw-i18n-alt]');
		for (var altIndex = 0; altIndex < altElements.length; altIndex++) {
			var altElement = altElements[altIndex];
			var altKey = altElement.getAttribute('data-cw-i18n-alt');
			altElement.alt = pageTranslations[altKey];
		}

		try {
			localStorage.setItem('portfolio-language', language);
		}
		catch (error) {
			console.warn('Unable to save the language preference.', error);
		}
	}

	if (languageToggle) {
		languageToggle.addEventListener('click', function() {
			currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
			applyLanguage(currentLanguage);
		});
	}

	applyLanguage(currentLanguage);
})();