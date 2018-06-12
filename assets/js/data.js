const mapData = {
    '#5c8944': {
        label: 'cf',
        color: 'military-green',
        description: 'Crater fill unit - Layered deposits and sinuous ridges within large craters.',
        interpretation: 'Sedimentary deposition in lacustrine environment with ridges formed by inversion of fluvial systems.'
    },
    '#ffff73': {
        label: 'c',
        color: 'custard',
        description: 'Crater unit - Craters with diameters greater than 4 kms and circumferential deposits. Deposits display a variety of textures and layering.',
        interpretation: 'Rocks and sediments emplaced by impact, ejection, and deformation of target units. Layered and lobate ejecta indicate volatile-rich targets.'
    },
    '#898944': {
        label: 'cp',
        color: 'olive-drab',
        description: 'Crater plains unit - Level and low-lying surfaces, outcropping from beneath plana and AD units. Displays crenulated ridges and small craters.',
        interpretation: 'Lava plains underlying other units. Wrinkle ridges indicate localized contraction [13]. Clusters of small craters are secondary impacts.'
    },
    '#bed2ff': {
        label: 'adu',
        color: 'pale-blue',
        description: 'Aeolis Dorsa, undivided unit - Small sinuous ridges and networks of ridges with reliefs <10 meters. Some upper surfaces have semi-concentric ridges.',
        interpretation: 'Fluvial paleochannel fills and meander deposits that have experienced variable amounts of cementation, differential erosion, and topographic inversion to form ridges [8,9].',
    },
    '#b399eb': {
        label: 'ad3',
        color: 'lavender',
        description: 'Aeolis Dorsa, upper unit - Ridges bificate downslope of fan apices. Fans and ridge networks generally form adjacent to plana.',
        interpretation: 'Fans and networks are most consistent with alluvial systems that formed next to plana during intermittent discharge events [8,9].',
    },
    '#004da8': {
        label: 'ad2',
        color: 'dark-blue',
        description: 'Aeolis Dorsa, middle unit - Relatively dark-toned ridges with widths ~1 km and lengths 100’s kms, i.e., Aeolis Serpens.  Upper surfaces show semi-concentric lineations.',
        interpretation: 'Fluvial paleochannel fills and meander deposits, variably cemented and topographically inverted. Aeolis Serpens represents axial paleochannel.'
    },
    '#73b2ff': {
        label: 'ad1',
        color: 'sky-blue',
        description: 'Aeolis Dorsa, lower unit - Relatively light-toned ridges with widths >1 km and 10’s kms long. Some upper surfaces have semi-concentric ridges.',
        interpretation: 'Fluvial paleochannel fills and meander deposits, variably cemented and topographically inverted, formed during periods of frequent discharge events [8,9].'
    },
    '#2a1d8a': {
        label: 'im',
        color: 'deep-purple',
        description: 'Interplana mounds unit - Mounds with rough surfaces and steep slopes.  Superposes plana units and Aeolis Dorsa units.',
        interpretation: 'Indurated remanents of formerly extensive interplana deposits, emplaced by regional-scale depositional process(es).',
    },
    '#ffebaf': {
        label: 'pu',
        color: 'cream',
        description: 'Plana undivided unit - Rough surfaces with knobs, ridges, plains, and pits. Significant local variation in texture.  Forms in topographically low areas, adjacent to other plana units and Aeolis Dorsa units.',
        interpretation: 'Remanents of plana units, weathered and eroded by aeolian processes.  Some outcrops adjacent to Aeolis Dorsa units were eroded by fluvial processes.'
    },
    '#f5ca7a': {
        label: 'p2',
        color: 'sand-yellow',
        description: 'Plana upper unit - Rough surfaces of serrated mesas, knobs, and large ridges with sub-parallel orientations.  Forms topographically high, layered outcrops located in Aeolis and Zephyria Plana.',
        interpretation: 'Younger sedimentary and (or) volcanic material emplaced by regional-scale deposition.  Ridges are yardangs, formed by abrasion with aeolian sediments.',
    },
    '#d7c29e': {
        label: 'p1',
        color: 'salt-pink',
        description: 'Plana lower unit - Rough surfaces of knobs and ridges with sub-parallel orientations.  Forms topographically low, layered outcrops, adjacent to plana units.',
        interpretation: 'Older sedimentary and (or) volcanic material emplaced by regional-scale deposition.  Ridges are yardangs, formed by abrasion with aeolian sediments.',
    },
    '#895a44': {
        label: 'ph',
        color: 'clay',
        description: 'Plana hummocky unit - Broad, relatively low-relief hummocks with rippled surfaces, many shallow depressions, and exposed crater rims, located adjacent to Zephyria Plana.',
        interpretation: 'Lowermost unit of Zephyria plana that provided gradients for runoff and channelized flow into interplana area.  Composed of volcanic and (or) fluvial material shed from the southern highlands.'
    },
    '#897044': {
        label: 'pm',
        color: 'bearskin',
        description: 'Plana mesas unit - Mesas with rough surfaces, including many small craters and wrinkle ridges.  Forms on Aeolis Planum within the upper plana unit (AHp2) and adjacent to highlands units.',
        interpretation: 'Wrinkle ridges, craters, and brightness in nighttime IR suggests well-indurated materials.  These mesas are interpreted to be northern remanents of highlands units based on similarities of surface textures.'
    },
    '#d79e9e': {
        label: 'tu',
        color: 'pale-pink',
        description: 'Transitional undivided unit - Smooth and finely lineated surfaces located in topographic lows between ridges and mesas.',
        interpretation: 'Sediment and debris accumulated by aeolian deposition and mass-wasting of transitional and highlands units.',
    },
    '#894444': {
        lable: 'td',
        color: 'mauve',
        description: 'Transitional depression unit - Topographically low surfaces with high densities of fine lineations around knobs and mesas.',
        interpretation: 'Low surface is the effect of extensional tectonics along the highland-lowland boundary. Unit represents sink for aeolian sediment [11].'
    },
    '#f57a7a': {
        label: 'tt',
        color: 'coral',
        description: 'Transitional terrain unit - Rough surfaces of craters, mesas, and cuspate ridges, located adjacent to highlands units.',
        interpretation: 'Volcanic and (or) fluvial material shed from the southern highlands then indurated.'
    },
    '#e69800': {
        label: 'hu',
        color: 'honey-mustard',
        description: 'Highlands undivided unit - Steep-slope surfaces adjacent to highlands and transition units that shallow into hummocky areas.',
        interpretation: 'Material deposited by hillslope erosion and mass wasting of highlands units and transition units.'
    },
    '#a87000': {
        label: 'hp',
        color: 'scooby-doo',
        description: 'Highlands plateau unit - High-relief, cratered surfaces, located south of plana units.  Surfaces are dissected by wide linear troughs with depths of ~1 km. Crater rims subdued.',
        interpretation: 'Moderately degraded terrains of impact, volcanic, and fluvial material.  Linear troughs indicate deformation by extension.  Wrinkle ridges suggest deformation by compression [13].'
    }
}