const MenuClose = ({className, onClick}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
    className={className}
    onClick={onClick}
	>
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
)

const MenuOpen = ({className, onClick}) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"  className={className} onClick={onClick}>
		<g id="Layer_47" data-name="Layer 47">
			<path d="M12,20.84H32a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,12,20.84Z" />
			<path d="M53.5,32A1.5,1.5,0,0,0,52,30.5H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,32Z" />
			<path d="M52,43.16H32a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,43.16Z" />
		</g>
	</svg>
)



export { MenuClose, MenuOpen }
