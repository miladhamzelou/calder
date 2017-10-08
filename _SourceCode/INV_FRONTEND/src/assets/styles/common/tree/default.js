export default {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0,
      color: '#0099CC',
      fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
      fontSize: '14px',
      minWidth:'200px'
    },
    node: {
      base: {
        position: 'relative'
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block',
        maxWidth: '200px'
      },
      activeLink: {
        background: '#ffffff'
      },
      menu: {
        base:{
          position: 'relative'
        },
        dropdown: {
          position: 'absolute',
          right: 0,
          top: 0
        },
        show: {
          position: 'absolute',
          right: 0,
          top: 0,
          display: 'block'
        },
        hide: {
          display: 'none'
        }
      },
      toggle: {
        base: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'middle',
          marginLeft: '-5px',
          height: '14px',
          width: '14px'
        },
        wrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-10px 0px 0px -3px',
          height: '14px'
        },
        height: 6,
        width: 6,
        arrow: {
          fill: '#0099CC',
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: '#0099CC'
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          position: 'absolute',
          top: '0px',
          left: '-21px'
        },
        title: {
          lineHeight: '24px',
          verticalAlign: 'middle'
        }
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px'
      },
      loading: {
        color: '#E2C089'
      }
    }
  }
}