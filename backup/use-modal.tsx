// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogCancel,
//   AlertDialogAction,
//   AlertDialogHeader,
//   AlertDialogFooter,
// } from '~/components-shadcn/alert-dialog';
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogDescription,
//   DialogHeader,
//   DialogFooter,
// } from '~/components-shadcn/dialog';
// import React, { createContext, useContext, useState, useCallback } from 'react';
// import { Button } from '~/components-shadcn/button';

// type ModalType = 'alert' | 'dialog' | 'custom';

// interface ModalOptions {
//   type: ModalType;
//   title: string;
//   description: string;
//   cancelText?: string;
//   confirmText?: string;
//   onConfirm?: () => void;
//   onCancel?: () => void;
//   content?: React.ReactNode;
// }

// interface ModalContextType {
//   showModal: (options: ModalOptions) => void;
// }

// const ModalContext = createContext<ModalContextType | undefined>(undefined);

// export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

//   const showModal = useCallback((options: ModalOptions) => {
//     setModalOptions(options);
//   }, []);

//   const handleConfirm = useCallback(() => {
//     modalOptions?.onConfirm?.();
//     setModalOptions(null);
//   }, [modalOptions]);

//   const handleCancel = useCallback(() => {
//     modalOptions?.onCancel?.();
//     setModalOptions(null);
//   }, [modalOptions]);

//   const renderModal = () => {
//     if (!modalOptions) return null;

//     switch (modalOptions.type) {
//       case 'alert':
//         return (
//           <AlertDialog open={true}>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>{modalOptions.title}</AlertDialogTitle>
//                 <AlertDialogDescription>{modalOptions.description}</AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel onClick={handleCancel}>{modalOptions.cancelText || 'Cancel'}</AlertDialogCancel>
//                 <AlertDialogAction onClick={handleConfirm}>{modalOptions.confirmText || 'Confirm'}</AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>
//         );
//       case 'dialog':
//         return (
//           <Dialog open={true}>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>{modalOptions.title}</DialogTitle>
//                 <DialogDescription>{modalOptions.description}</DialogDescription>
//               </DialogHeader>
//               {modalOptions.content}
//               <DialogFooter>
//                 <Button variant="outline" onClick={handleCancel}>
//                   {modalOptions.cancelText || 'Cancel'}
//                 </Button>
//                 <Button onClick={handleConfirm}>{modalOptions.confirmText || 'Confirm'}</Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         );
//       case 'custom':
//         return modalOptions.content;
//       default:
//         return null;
//     }
//   };

//   return (
//     <ModalContext.Provider value={{ showModal }}>
//       {children}
//       {renderModal()}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => {
//   const context = useContext(ModalContext);
//   if (context === undefined) {
//     throw new Error('useModal must be used within a ModalProvider');
//   }
//   return context;
// };
