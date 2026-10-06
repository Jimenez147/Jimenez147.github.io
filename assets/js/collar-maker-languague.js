(function() {
	var translations = {
		en: {
			pageTitle: 'Collar Maker Machine - Project Portfolio',
			navCollarMaker: 'Collar Maker',
			coverAlt: 'Collar Maker Machine',
			projectSummary: 'A machine designed to automate the production of rib-knit T-shirt collars and operate alongside an overlock sewing machine.',
			projectProperties: 'Project Properties',
			projectBeginning: 'Project beginning',
			projectStartDate: '11/06/2024',
			projectType: 'Type of project',
			projectTypeValue: 'Industrial automation machine',
			projectState: 'Project state',
			projectStatus: 'In progress',
			platforms: 'Platforms',
			tools: 'Tools',
			descriptionHeading: 'Description',
			descriptionIntro: 'This machine automates rib-knit collar production alongside an overlock sewing machine, replacing manual fabric handling with a continuous process that improves production speed and cost.',
			descriptionDetails: 'A microcontroller controls the machine, which is operated through a built-in touchscreen. The operator can configure parameters such as collar size and production speed, while the screen also displays process status. Wi-Fi connectivity sends periodic production telemetry.',
			model3dCaption: '3D model of the machine',
			equipmentWorks: 'How the Equipment Works',
			videoFallback: 'Your browser does not support the video tag.',
			operatingExplanationTitle: 'The process uses a continuous strip of ribbed knit fabric as raw material and is divided into four main stages:',
			feedingSystemTitle: 'Feeding system:',
			feedingSystem: 'It uses a stepper motor and two parallel high-friction rollers to grip and feed the fabric strip inward. A sensor at the material inlet detects the fabric and triggers the feed.',
			foldingSystemTitle: 'Folding system:',
			foldingSystem: 'An angled upper blade guides the fabric end into an internal slot. A sensor detects the material and activates an arm that holds the end in place. The feed system then pushes the strip, causing it to fold in on itself.',
			transportSystemTitle: 'Transport system:',
			transportSystem: 'When the collar reaches the selected size, a solenoid presses the folded strip in place. A linear actuator moves the assembly forward, feeding it into the sewing machine.',
			finalStageTitle: 'Final cutting and sewing:',
			finalStage: 'A control signal activates the sewing machine, which cuts and joins the collar ends with a seam. The machine then resets and releases the finished collar to start the next cycle.',
			projectHighlights: 'Key Aspects of the Project',
			customPcbAlt: 'Custom control PCB',
			pcbDescription: 'A custom PCB combines the control circuitry needed to operate the motors and actuators in a single unit.',
			internalMechanismAlt: 'Internal machine mechanism',
			mechanismDescription: 'Internal machine mechanism.',
			otherProjects: 'Other Projects',
			smartBlindsAlt: 'Smart blackout blinds'
		},
		es: {
			pageTitle: 'Máquina Collar Maker - Portafolio de proyectos',
			navCollarMaker: 'Collar Maker',
			coverAlt: 'Máquina Collar Maker',
			projectSummary: 'Máquina diseñada para automatizar la producción de cuellos de punto acanalado para t-shirts pensada para trabajar en conjunto con una máquina de coser overlock.',
			projectProperties: 'Propiedades del proyecto',
			projectBeginning: 'Fecha de inicio',
			projectStartDate: '06/11/2024',
			projectType: 'Tipo de proyecto',
			projectTypeValue: 'Máquina de automatización industrial',
			projectState: 'Estado del proyecto',
			projectStatus: 'En desarrollo',
			platforms: 'Plataformas',
			tools: 'Herramientas',
			descriptionHeading: 'Descripción',
			descriptionIntro: 'Esta máquina automatiza la producción de cuellos de punto acanalado (Rib Knit Collar) funcionando en conjunto con una máquina de coser overlock. Sustituye la manipulación manual de la tela por un proceso continuo y simplificado que mejora la velocidad y los costos de producción.',
			descriptionDetails: 'Un microcontrolador controla la máquina, que se opera mediante una pantalla táctil integrada. El operador puede configurar parámetros como el tamaño del cuello y la velocidad de producción; la pantalla también muestra el estado del proceso. Mediante conexión a Wi-Fi la maquina es capaz de enviar informes periódicos de telemetría de producción.',
			model3dCaption: 'Modelo 3D de la máquina',
			equipmentWorks: 'Cómo funciona el equipo',
			videoFallback: 'Tu navegador no admite la reproducción de este video.',
			operatingExplanationTitle: 'El proceso utiliza una tira continua de tejido de punto acanalado como materia prima y se divide en cuatro etapas principales:',
			feedingSystemTitle: 'Sistema de alimentación:',
			feedingSystem: 'Emplea un motor paso a paso y dos rodillos paralelos de alta fricción para sujetar y desplazar la tira de tela hacia el interior. Un sensor en la entrada de material reconoce la presencia de la tela y activa el desplazamiento. ',
			foldingSystemTitle: 'Sistema de pliegue:',
			foldingSystem: 'Una paleta superior inclinada guía el extremo de la tira hacia una ranura interna. Un sensor detecta el material y activa un brazo que lo sujeta. Luego, el sistema de alimentación empuja la tira y al tener uno de sus extremos fijos hace que se pliegue sobre sí misma.',
			transportSystemTitle: 'Sistema de transporte:',
			transportSystem: 'Cuando el cuello alcanza el tamaño seleccionado, un solenoide presiona y asegura la tira plegada. Después, un actuador lineal desplaza el conjunto para llevarlo al area de costura de la máquina de coser.',
			finalStageTitle: 'Corte y costura finales:',
			finalStage: 'La máquina de coser es activada mediante una señal enviada por el dispositivo a través de un conector de control. Esta corta el material y crea una costura para unir los extremos. Finalizado el corte, los sistemas de la máquina retroceden a su posición inicial, soltando el cuello terminado para iniciar un nuevo ciclo.',
			projectHighlights: 'Aspectos destacados del proyecto',
			customPcbAlt: 'Placa de control personalizada',
			pcbDescription: 'Emplear una PCB personalizada que integra en una sola unidad la circuiteria de control necesaria para los motores y actuadores.',
			internalMechanismAlt: 'Mecanismo interno de la máquina',
			mechanismDescription: 'Mecanismo interno de la máquina.',
			otherProjects: 'Otros proyectos',
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