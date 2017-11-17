		function donutToggler() {
			const zusammenSetzungTrigger = document.querySelector('[data-role=zusammensetzung-trigger]');
			const donutGroup = document.querySelector('[data-role=donut-group]');
			let isOpen = false;

			function setIsOpen() {
				return isOpen === false ? isOpen = true : isOpen = false;
			};

			function initHide() {
				donutGroup.classList.add('hidden-all');
			};

			function swapText(e) {
				isOpen ? e.innerText = 'Weniger anzeigen' : e.innerText = 'Mehr anzeigen';
			};

			function toggleDonut() {
				donutGroup.classList.toggle('hidden-all');
				setIsOpen();
				swapText(zusammenSetzungTrigger);
				donutGroup.style.opacity = '0';
				if (isOpen) {
					fetchPortfolio($('select[name="summaryModule.selectedStrategy"]').val());
				}
			};

			initHide();

			zusammenSetzungTrigger.addEventListener('click', toggleDonut);
		};

		donutToggler();
