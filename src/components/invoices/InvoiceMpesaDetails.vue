<template>
  <div>
    <strong>
      <AppEditable
        :value="invoice.bank_name"
        v-b-modal.mpesa_details
        :errors="errors"
        :disabled="true"
        field="bank_name"
        :placeholder="$t('bank_name')"
        class="break-line"
      />
    </strong>
    <AppEditable
      :value="invoice.paybill_and_buygoods_no"
      v-b-modal.mpesa_details
      :errors="errors"
      :disabled="true"
      field="paybill_and_buygoods_no"
      :placeholder="$t('paybill_and_buygoods_no')"
      class="break-line"
    />
    <BModal
      id="mpesa_details"
      centered
      :title="$t('bank_mpesa_modal_title')"
      hide-footer
      size="lg"
      content-class="bg-base dp--24"
    >
      <MpesaAccountsList @select="accountSelected" />
    </BModal>
  </div>
</template>
<script>
import { BModal, VBModal } from "bootstrap-vue";
import MpesaAccountsList from "@/components/mpesa-accounts/MpesaAccountsList";
import AppEditable from "@/components/form/AppEditable";

export default {
  i18nOptions: { namespaces: "invoice-mpesa-details" },
  props: ["invoice", "errors"],
  components: {
    AppEditable,
    BModal,
    MpesaAccountsList
  },
  directives: {
    "b-modal": VBModal
  },
  methods: {
    accountSelected(account) {
      this.$emit("update", {
        bank_account_no: account.account_no,
        bank_name: account.bank_name,
        bank_account_id: account.id
      });
      this.$bvModal.hide("account_no");
    }
  }
};
</script>
