import { type FormEvent } from "react";
import { motion } from "framer-motion";
import CartModalFooter from "./CartModalFooter";
import CartItemsList from "./CartItemsList";
import CartModalHeader from "./CartModalHeader";

export default function CartModal() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/70 dark:bg-white/30">
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-10 border border-slate-300 bg-white p-4 text-black shadow-md dark:border-gray-500  dark:bg-slate-900 dark:text-gray-400 dark:shadow-slate-700 sm:left-3/4"
        onClick={(e: FormEvent) => e.stopPropagation()}
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col items-start gap-2">
            <CartModalHeader />
            <CartItemsList />
          </div>

          <CartModalFooter />
        </div>
      </motion.div>
    </div>
  );
}
