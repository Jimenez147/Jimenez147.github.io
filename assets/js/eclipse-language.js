(function() {
	var translations = {
		en: {
			pageTitle: 'Eclipse - Project Portfolio',
			navCollarMaker: 'Eclipse',
			coverAlt: 'Eclipse blackout blinds',
			projectSummary: 'A smart blackout blind controlled and programmed by an app.',
			projectProperties: 'Project Properties',
			projectBeginning: 'Project beginning',
			projectStartDate: '08/17/2026',
			projectType: 'Type of project',
			projectTypeValue: 'Home automation device',
			projectState: 'Project state',
			projectStatus: 'In progress',
			platforms: 'Platforms',
			tools: 'Tools',
			threeDModelling: '3D Modelling',
			threeDPrinting: '3D Printing',
			pcbDesign: 'PCB design',
			descriptionHeading: 'Description',
			DeviceModelAlt: 'Device model',
			descriptionDetail: 'The app used to control the blinds has two modes of operation: direct control and motion scheduling. The app has two buttons to open or close the blinds immediately, and it also offers the option to schedule them to open or close at any time of day. It sends the instructions via Bluetooth to the microcontroller, which stores them in its internal memory to execute them at the desired time.',
			descriptionIntro: 'Motorized blackout blinds that cover the entire perimeter of the window to completely block out light, controlled by a microcontroller in a smart module connected to a power source, which communicates via Bluetooth with a mobile app to control their movement.',
			controlAppAlt: 'Blinds control app',
			otherProjects: 'Other Projects'
		},
		es: {
			pageTitle: 'Eclipse - Portafolio de proyectos',
			navCollarMaker: 'Eclipse',
			coverAlt: 'Cortinas blackout Eclipse',
			projectSummary: 'Cortinas blackout inteligentes controladas y programadas mediante una aplicación.',
			projectProperties: 'Propiedades del proyecto',
			projectBeginning: 'Fecha de inicio',
			projectStartDate: '17/08/2026',
			projectType: 'Tipo de proyecto',
			projectTypeValue: 'Dispositivo de domótica',
			projectState: 'Estado del proyecto',
			projectStatus: 'En desarrollo',
			platforms: 'Plataformas',
			tools: 'Herramientas',
			threeDModelling: 'Modelado 3D',
			threeDPrinting: 'Impresión 3D',
			pcbDesign: 'Diseño de PCB',
			descriptionHeading: 'Descripción',
			DeviceModelAlt: 'Modelo del dispositivo',
			descriptionDetail: 'La app utilizada para controlar las cortinas tiene dos modos de uso. Control directo y programación de movimientos. La aplicación cuenta con dos botones para abrir o cerrar directamente las cortinas en el momento y también cuenta con la opción de programar una apertura o cierre a cualquier hora del dia. Esta le manta las instrucciones via bluetooth al microcontrolador el cual las conserva en su almacenamiento interno para ejecutarlas en el momento deseado.',
			descriptionIntro: 'Unas cortinas blackout motorizadas que recubren todo el contorno de la ventana para sellarla por completo de la entrada de luz. Controlada por un microcontrolador en un módulo inteligente conectado a la corriente el cual se comunica a través de bluetooth con una aplicación en el celular para controlar su movimiento.',
			controlAppAlt: 'Aplicación para controlar las cortinas',
			otherProjects: 'Otros proyectos'
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
		var textElements = document.querySelectorAll('[data-cm-i18n]');
		var altElements = document.querySelectorAll('[data-cm-i18n-alt]');

		document.title = pageTranslations.pageTitle;
		document.documentElement.lang = language;

		for (var index = 0; index < textElements.length; index++) {
			var element = textElements[index];
			var key = element.getAttribute('data-cm-i18n');

			if (pageTranslations[key] !== undefined)
				element.textContent = pageTranslations[key];
		}

		for (var altIndex = 0; altIndex < altElements.length; altIndex++) {
			var altElement = altElements[altIndex];
			var altKey = altElement.getAttribute('data-cm-i18n-alt');

			if (pageTranslations[altKey] !== undefined)
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
