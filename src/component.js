

// import React, { Component } from 'react';

// import GridLayout from 'react-grid-layout';


// class TestRoute extends Component {

//   createArray = elemCount => {
//     let i = 1;
//     let array = []
//     while (i <= elemCount) {
//       array.push({
//         id: i,
//         text: `text ${i}`
//       })
//       i++;
//     }

//     return array;
//   }

//   render() {
//     const elemCount = 120;
//     const setka = this.createArray(elemCount);

//     const abc = {
//       q: 2,
//       w: 3,
//       e: 4,
//       r: 7,
//       text: 'ololo'
//     }

//     // grid-column-start
//     // grid-column-end
//     // grid-row-start
//     // grid-row-end

//     return (
//       <div className='test'>
//         <div className='test-container'>
//           { setka.map((item, index) => {
//             return(
//               <div className='setka' key={index}></div>
//             )
//           })}
//           <div className='test-item' key={abc.text} style={{ gridArea: `${abc.q}/${abc.w}/${abc.e}/${abc.r}`}}>{abc.text}</div>

//         </div>
//       </div>
//     )
//   }
// }

// export default TestRoute;


// export default class MyFirstGrid extends React.Component {
//   createArray = elemCount => {
//     let i = 1;
//     let array = []
//     while (i <= elemCount) {
//       array.push({
//         id: i,
//         text: `text ${i}`
//       })
//       i++;
//     }

//     return array;
//   }

//   render() {
//     const elemCount = 120;
//     const setka = this.createArray(elemCount);
//     // layout is an array of objects, see the demo for more complete usage
//     const layout = [
//       {i: '0', x: 0, y: 0, w: 1, h: 2, static: true},
//       {i: '1', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
//       {i: '2', x: 4, y: 0, w: 1, h: 2}
//     ];
//     return (
//       <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>

//         { setka.map((item, index) => {
//             return(
//               <div className='setka' key={index}></div>
//             )
//           })}
//       </GridLayout>
//     )
//   }
// }

// export default class MyFirstGrid extends React.Component {
//   render() {
//     return (
//       <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
//         <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
//         <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
//         <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
//       </GridLayout>
//     )
//   }
// }






//  .setka{
//     border-color: gray;
//     border-style: solid;
//     border-width: 1px;
//     /*cursor: pointer;*/
//   }


// .react-grid-layout {
//   position: relative;
//   transition: height 200ms ease;
// }
// .react-grid-item {
//   transition: all 200ms ease;
//   transition-property: left, top;
// }
// .react-grid-item.cssTransforms {
//   transition-property: transform;
// }
// .react-grid-item.resizing {
//   z-index: 1;
//   will-change: width, height;
// }

// .react-grid-item.react-draggable-dragging {
//   transition: none;
//   z-index: 3;
//   will-change: transform;
// }

// .react-grid-item.dropping {
//   visibility: hidden;
// }

// .react-grid-item.react-grid-placeholder {
//   background: red;
//   opacity: 0.2;
//   transition-duration: 100ms;
//   z-index: 2;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   -o-user-select: none;
//   user-select: none;
// }

// .react-grid-item > .react-resizable-handle {
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   bottom: 0;
//   right: 0;
//   cursor: se-resize;
// }

// .react-grid-item > .react-resizable-handle::after {
//   content: "";
//   position: absolute;
//   right: 3px;
//   bottom: 3px;
//   width: 5px;
//   height: 5px;
//   border-right: 2px solid rgba(0, 0, 0, 0.4);
//   border-bottom: 2px solid rgba(0, 0, 0, 0.4);
// }

// .react-resizable-hide > .react-resizable-handle {
//   display: none;
// }


// .react-resizable {
//   position: relative;
// }
// .react-resizable-handle {
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background-repeat: no-repeat;
//   background-origin: content-box;
//   box-sizing: border-box;
//   background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
//   background-position: bottom right;
//   padding: 0 3px 3px 0;
// }
// .react-resizable-handle-sw {
//   bottom: 0;
//   left: 0;
//   cursor: sw-resize;
//   transform: rotate(90deg);
// }
// .react-resizable-handle-se {
//   bottom: 0;
//   right: 0;
//   cursor: se-resize;
// }
// .react-resizable-handle-nw {
//   top: 0;
//   left: 0;
//   cursor: nw-resize;
//   transform: rotate(180deg);
// }
// .react-resizable-handle-ne {
//   top: 0;
//   right: 0;
//   cursor: ne-resize;
//   transform: rotate(270deg);
// }
// .react-resizable-handle-w,
// .react-resizable-handle-e {
//   top: 50%;
//   margin-top: -10px;
//   cursor: ew-resize;
// }
// .react-resizable-handle-w {
//   left: 0;
//   transform: rotate(135deg);
// }
// .react-resizable-handle-e {
//   right: 0;
//   transform: rotate(315deg);
// }
// .react-resizable-handle-n,
// .react-resizable-handle-s {
//   left: 50%;
//   margin-left: -10px;
//   cursor: ns-resize;
// }
// .react-resizable-handle-n {
//   top: 0;
//   transform: rotate(225deg);
// }
// .react-resizable-handle-s {
//   bottom: 0;
//   transform: rotate(45deg);
// }




class Portal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }


  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}



const Button = ({
  children, onClick, className, disabled, active, invert, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  // const classes = classNames(
  //   'btn',
  //   className,
  //   { active },
  //   { invert },
  // );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={className}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};





class Modal extends React.Component {
  modalSettings(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  render() {
    const { title, isOpen, onCancel, onSubmit, children } = this.props;
    return (
      <Fragment>
        { isOpen &&
          <Portal>
            <div className="modalOverlay" onClick={onCancel}>
              <div className="modalWindow" onClick={this.modalSettings}>
                <h3 className="modalHeader">
                  <div className="modalTitle">{title}</div>
                </h3>
                <div className="modalBody">
                  {children}
                </div>
                <div className="modalFooter">
                  <button type="button" className="btn btn-default rounded mt-2" onClick={onCancel}>{Dict("Close")}</button>
                  <button type="submit" className="btn btn-primary rounded mt-2" onClick={onSubmit} tabIndex="100">{Dict("Change")}</button>
                </div>
              </div>
            </div>
          </Portal>
        }
      </Fragment>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};





import GridLayout from 'react-grid-layout';

// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

class Test extends React.Component {

  constructor(props) {
    super(props);
    const elemCount = 10;
    this.state = {
      // layout: [
      //   {i: '0', x: 0, y: 0, w: 1, h: 2},
      //   {i: '1', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      //   {i: '2', x: 4, y: 0, w: 1, h: 2}
      // ],
      result: [
        {
          BottomPosition: "2",
          CustomColumnCDRClass: "1",
          FieldName: "test2",
          FieldType: "date",
          LeftPosition: "1",
          RightPosition: "2",
          RowsPosition: "1",
          SelectsJSON: "",
          ShowInList: "1",
          TabName: "tab1",
          TopPosition: "1",
          id: "test",
          name: "test2"
        }
      ],
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {
          id: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: false,
          name: 'test' + i
        };
      }),
      editId: '',

      onChangeType: false,
      isOpen: false,

      elType: 1,

      basicTab: 'tab1',
      textareaJSON: ''
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.openModal = this.openModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.changeElType = this.changeElType.bind(this);


    this.saveInfo = this.saveInfo.bind(this);
  }


  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const item = this.state.result.find(item => item.id === this.state.editId)
      this.saveInfo(this.state.editId, { FieldName: item.FieldName })
        .then( res => {
          this.setState({ editId: '' });
        })
    }
  }

  createArray(elemCount) {
    let i = 1;
    let array = []
    while (i <= elemCount) {
      array.push({
        id: i,
        text: `text ${i}`
      })
      i++;
    }

    return array;
  }

  onAddItem() {

  }

  onChangeType(id) {
    console.log("onChangeType", id);
    // this.setState({ onChangeType: true })
  }

  onRemoveItem(id) {
    console.log("removing", id);
    // let answer = confirm("Удалить?")
    // if (answ/er) {
      this.setState({ result: _.reject(this.state.result, { id: id }) });

      this.saveInfo(id, {}, "DELETE")
    // }
  }

  onChangeTitle(id, e) {
    const index = this.state.result.findIndex(item => id === item.id);

    this.setState({ result: [
      ...this.state.result.slice(0, index),
      {
        ...this.state.result[index],
        FieldName: e.target.value
      },
      ...this.state.result.slice(index + 1)
    ]})
  }

  onEditTitle(editId) {
    this.setState({ editId });
  }


  setWrapperRef(node) {
    this.wrapperRef = node;
  }



  changeElType(event) {
    console.log('changeElType', event.target.value)
    this.setState({ elType: event.target.value });
  }




  openModal(id) {
    this.setState({ isOpen: id });
  }

  handleSubmit() {
    console.log('Submit function!');
    this.setState({ isOpen: false });
    const { elType, textareaJSON } = this.state

    this.saveInfo(this.state.isOpen, { FieldType: elType, SelectsJSON: textareaJSON })
  }

  handleCancel() {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  UNSAFE_componentWillReceiveProps(newprops) {
    if (newprops.data.result) {
      console.log('componentDidUpdate 3')
      this.setState({ result: newprops.data.result })
    }
  }


  onTabClick(tab) {
    this.setState({ basicTab: tab })
  }

  onChangeJson(json) {
    console.log('json')
    this.setState({ textareaJSON: json })
  }

  onResizeStop(array, old, next) {
    // console.log('onResizeStop', { old, array, next })
    const id = next.i
    const data = {
      LeftPosition: `${next.x + 1}`,
      RightPosition: `${next.x + 1 + next.w}`,
      TopPosition: `${next.y + 1}`,
      BottomPosition: `${next.y + 1 + next.h}`,
    }
    // console.log('data', data)
    if (old.x !== next.x || old.y !== next.y || old.h !== next.h || old.w !== next.w) {
      this.saveInfo(id, data)
    }
  }

  onDragStop(array, old, next) {
    // console.log('onDragStop', { old, array, next })
    const id = next.i
    const data = {
      LeftPosition: `${next.x + 1}`,
      RightPosition: `${next.x + 1 + next.w}`,
      TopPosition: `${next.y + 1}`,
      BottomPosition: `${next.y + 1 + next.h}`,
    }
    // console.log('data', data)
    if (old.x !== next.x || old.y !== next.y || old.h !== next.h || old.w !== next.w) {
      this.saveInfo(id, data)
    }
  }

  saveInfo(id, data, method = "POST") {
    // this.setState({"isLoaded":false});
    // var upd = {};

// url: "/record/custom_columns/93"
// method: "POST"

    let mainId = id || "93"
    const item = this.state.result.find(item => item.id === mainId)
    const {
      BottomPosition,
      FieldName,
      FieldType,
      LeftPosition,
      RightPosition,
      SelectsJSON,
      TabName,
      TopPosition
    } = item

    if (!data) {
      data = {
        BottomPosition,
        FieldName,
        FieldType,
        LeftPosition,
        RightPosition,
        SelectsJSON,
        TabName,
        TopPosition
      }
    }


    return window.$root.setRecord("custom_columns", mainId, method, data);

    // let recordData = await window.$root.setRecord(this.props.tbl, this.props.id, "POST", upd);
    // this.setState({"isLoaded":true});
    // if(window.$root.container){
    //   if(this.state.dirty.SoundFile && window.$root.container.state.isConference) {
    //     let blob = window.$root.fileReaders[this.state.dirty.SoundFile - 1].data;
    //     let fileBase64 = await window.$root.convertBlobToBase64(blob);
    //     let file = {
    //       canDownload: true,
    //       soundFile: fileBase64.split(',')[1],
    //       soundFileName: ""
    //     }
    //     window.$root.binCache['/player/conference/' + recordData.id] = file;
    //   }
    //   window.$root.listBlock.selectItem(recordData.id);
    //   window.$root.container.setConditionId(recordData.id);
    // }
    // if(needReload) window.location.reload(true);
    // else {
    //   //this.setState({data:newdata});
    //   if(this.props.onchanged) this.props.onchanged(this);
    //   if(window.$root.container) window.$root.container.onRefresh();
    // }
  }

  render() {
    // const elemCount = 10;
    // const setka = this.createArray(elemCount);
    // layout is an array of objects, see the demo for more complete usage
    const { layout, items, elType, result, basicTab, textareaJSON, editId} = this.state;

    const style = {
      width: '100%',
      height: '70px',
      border: '2px solid #E7E7E7 !important'
    }

console.log('this.props Test', this.props.data.result)
console.log('this.state.', this.state)
console.log('this.oprops.', this.props)

    return (
      <Fragment>
        <div>
        <ul className="nav zutabs" style={{ minWidth: '200px' }}>
          { ['tab1', 'Тестовая вкладка'].map(item =>
            <li className="nav-item" onClick={this.onTabClick.bind(this, item)}>
              <div className="nav-link">
                {item}
              </div>
            </li>
          )}
          <li className="nav-item">
              <div className="nav-link">
                Добавить Вкладку
              </div>
            </li>
        </ul>
          <Modal
            title={Dict("EditRecord")}
            isOpen={this.state.isOpen}
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            >
            <select className='custom-select' value={elType} onChange={this.changeElType}>
              {[ { name: 'Текстовое', value: '1' }, { name: 'Выпадающй список', value: '2' } ].map(item => {
                return <option value={item.value}>{item.name}</option>
              })}
            </select>

            { elType === '2' ?
              <div>
                <span>JSON-массив выпадающих списков</span>
                <textarea style={style} value={textareaJSON} onChange={e => this.onChangeJson(e.target.value)}/>
              </div>
              : null
            }
          </Modal>


          <GridLayout
            className="layout"
            compactType={false}
            layout={layout}
            cols={12}
            rowHeight={40}
            width={880}
            onResizeStop={this.onResizeStop.bind(this)}
            onDragStop={this.onDragStop.bind(this)}>


            { result.filter(item => item.TabName === basicTab).map((item, index) => {
                const removeStyle = {
                  position: "absolute",
                  right: "2px",
                  top: 0,
                  cursor: "pointer"
                };
                const style = {
                  display: 'block',
                  textAlign: 'left',
                  color: '#46484B',
                  transition: '0.3s',
                  padding: '0 10px 0 36px',
                  height: '41px',
                  position: 'relative',
                  fontSize: '14px'
                }

                const styleIcon = {
                  position: 'absolute',
                  left: '13px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }
                const id = item.add ? "+" : item.id;
  // BottomPosition: h
  // LeftPosition : x
  // RightPosition: w
  // TopPosition: y


                const dataGrid = {
                  x: +item.LeftPosition - 1,
                  y: +item.TopPosition - 1,
                  w: +item.RightPosition - +item.LeftPosition,
                  h: +item.BottomPosition - +item.TopPosition
                }

                const abcTest = {
                  display: 'grid',
                  gridTemplateColumns: '10% 60% 10%',
                  padding: '0 2px',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '2px',
                  minHeght: '30px',
                  gridAutoRows: '30px'
                }

  if (isNaN(dataGrid.x) || isNaN(dataGrid.y) || isNaN(dataGrid.w) || isNaN(dataGrid.h)) {
    return <div>isNaN (( </div>
  }
                console.log('dataGrid', dataGrid)
                return(
                  <div className='setka' key={item.id} data-grid={dataGrid}>
                    <div style={abcTest}>
                      {/*<span className="text">{item.id}</span>*/}

                      <div className="dropdown ">
                        <button className="card-action icon icon-caret-down" type="button" id="dropdownActions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownActions">

                          <button style={style} className="dropdown-item" type="button" title={'Изменить тип'} key="change" onClick={this.openModal.bind(this, item.id)} >
                            <i style={styleIcon} className="icon icon-keyboard-o"></i>Изменить тип
                          </button>
                          <button style={style} className="dropdown-item" type="button" title={Dict("Delete")} key="del" onClick={this.onRemoveItem.bind(this, item.id)} >
                            <i style={styleIcon} className="icon icon-remove"></i>{Dict("Delete")}
                          </button>
                        </div>
                      </div>

                      { item.id === editId ?
                        <input ref={this.setWrapperRef} autoFocus value={item.FieldName} className="inputTest" onChange={this.onChangeTitle.bind(this, item.id)} /> :
                        <span style={{ paddingLeft: '4px' }}>{item.FieldName}</span>
                      }
                      <i className="icon icon-edit" style={{ cursor: 'pointer' }} onClick={this.onEditTitle.bind(this, item.id)}></i>
                    </div>
                    {/*<span
                      className="remove"
                      style={removeStyle}
                      onClick={this.onRemoveItem.bind(this, i)}
                    >x</span>*/}
                  </div>
                )
              })}
          </GridLayout>
        </div>
      </Fragment>
    )
  }
}


// class GridEmlement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,

//       elType: 1,
//       textareaJSON: ''
//     };

//     this.changeElType = this.changeElType.bind(this);

//     this.openModal = this.openModal.bind(this);
//     this.handleCancel = this.handleCancel.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   changeElType(event) {
//     console.log('changeElType', event.target.value)
//     this.setState({ elType: event.target.value });
//   }

//   onChangeJson(json) {
//     console.log('json')
//     this.setState({ textareaJSON: json })
//   }

//   openModal() {
//     this.setState({ isOpen: true });
//   }

//   handleSubmit() {
//     console.log('Submit function!');
//     this.setState({ isOpen: false });
//   }

//   handleCancel() {
//     console.log('Cancel function!');
//     this.setState({ isOpen: false });
//   }

//   render() {
//     const { elType } = this.state;
//     const { editId, item, dataDrid, onRemoveItem, setWrapperRef, onEditTitle, onChangeTitle } = this.props;
//     const style = {
//       width: '100%',
//       height: '70px',
//       border: '2px solid #E7E7E7 !important'
//     }

//     const removeStyle = {
//       position: "absolute",
//       right: "2px",
//       top: 0,
//       cursor: "pointer"
//     };
//     const styletextarea = {
//       display: 'block',
//       textAlign: 'left',
//       color: '#46484B',
//       transition: '0.3s',
//       padding: '0 10px 0 36px',
//       height: '41px',
//       position: 'relative',
//       fontSize: '14px'
//     }

//     const styleIcon = {
//       position: 'absolute',
//       left: '13px',
//       top: '50%',
//       transform: 'translateY(-50%)'
//     }
//     const abcTest = {
//       display: 'grid',
//       gridTemplateColumns: '10% 60% 10%',
//       padding: '0 2px',
//       justifyContent: 'start',
//       alignItems: 'center',
//       gap: '2px',
//       minHeght: '30px',
//       gridAutoRows: '30px'
//     }
//     return(

//       <div className='setka' key={item.id} data-grid={dataDrid}>
//         <Modal
//             title={Dict("EditRecord")}
//             isOpen={this.state.isOpen}
//             onCancel={this.handleCancel}
//             onSubmit={this.handleSubmit}
//           >
//           <select className='custom-select' value={elType} onChange={this.changeElType}>
//             {[ { name: 'Текстовое', value: '1' }, { name: 'Выпадающй список', value: '2' } ].map(item => {
//               return <option value={item.value}>{item.name}</option>
//             })}
//           </select>

//           { elType === '2' ?
//             <div>
//               <span>JSON-массив выпадающих списков</span>
//               <textarea style={styletextarea} value={textareaJSON} onChange={e => this.onChangeJson(e.target.value)}/>
//             </div>
//             : null
//           }
//         </Modal>
//         <div style={abcTest}>
//           {/*<span className="text">{item.id}</span>*/}

//           <div className="dropdown ">
//             <button className="card-action icon icon-caret-down" type="button" id="dropdownActions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownActions">

//               <button style={style} className="dropdown-item" type="button" title={'Изменить тип'} key="change" onClick={this.openModal} >
//                 <i style={styleIcon} className="icon icon-keyboard-o"></i>Изменить тип
//               </button>
//               <button style={style} className="dropdown-item" type="button" title={Dict("Delete")} key="del" onClick={onRemoveItem} >
//                 <i style={styleIcon} className="icon icon-remove"></i>{Dict("Delete")}
//               </button>
//             </div>
//           </div>

//           { item.id === editId ?
//             <input ref={setWrapperRef} autoFocus value={item.name} className="inputTest" onChange={onChangeTitle} /> :
//             <span style={{ paddingLeft: '4px' }}>{item.name}</span>
//           }
//           <i className="icon icon-edit" style={{ cursor: 'pointer' }} onClick={onEditTitle}></i>
//         </div>
//         {/*<span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, i)}
//         >x</span>*/}
//       </div>
//     )
//   }
// }
