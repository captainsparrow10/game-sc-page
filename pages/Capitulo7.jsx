import { useRef, useEffect } from 'react'

export default function Capitulo7() {
	const viewer = useRef(null)
	const loadWebViewer = async () => {
		const WebViewer = (await import('@pdftron/webviewer')).default
		if (viewer.current) {
			WebViewer(
				{
					path: 'webviewer/lib',
					initialDoc: 'file/Capitulo7.pdf',
					disabledElements: [
						'viewControlsButton',
						'viewControlsOverlay',
						'toolsOverlay',
						'ribbonsDropdown',
						'selectToolButton',
						'panToolButton',
						'leftPanelButton',
						'toggleNotesButton',
						'toolsHeader',
					],
				},
				viewer.current
			)
		}
	}

    loadWebViewer();


	return (
		<div className="MyComponent">
			<div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
		</div>
	)
}
